
const { Collection } = require("discord.js")

module.exports = async (client, message) => {
  const startTime = new Date().getTime()
  let elapsedTime = 0

  if (message.channel.type === "dm") return
  if (message.author.bot) return

  const data = await client.getGuild(message.guild)
  const position = data.users.map(e => e.id).indexOf(message.member.id)
  const userInfo = data.users[position]

  if (message.guild && position == -1)
    await client.createUser(message.member, message.guild)



  if (message.guild && position >= 0) {
    if (userInfo.name != message.member.displayName) {
      await client.updateUserInfo(message.member,
        {
          "users.$.name": message.member.displayName
        })
    }
  }


  if (!message.content.startsWith(client.config.PREFIX)) return
  const args = message.content.slice(client.config.PREFIX.length).split(/ +/)
  const commandName = args.shift().toLowerCase()
  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName))
  const user = message.mentions.users.first()

  if (!command) return

  if (command.help.permissions && !message.member.hasPermission("BAN_MEMBERS")) return message.reply("Tu n'as pas la permission pour cette commande !")

  if (command.help.args && !args.length) {
    let noArgsReply = `Argument requis pour cette commande, ${message.author} !`
    if (command.help.usage) noArgsReply += `\nUsage de la commande: \`${client.config.PREFIX}${command.help.name} ${command.help.usage}\``
    return message.channel.send(noArgsReply)
  }

  if (command.help.isAdmin && !user) return message.reply("Il faut mentionner un membre.")

  if (command.help.isAdmin && message.guild.member(message.mentions.users.first()).hasPermission("ADMINISTRATOR")) return message.reply("Tu ne peux pas utiliser cette commande sur cet utilisateur !")


  if (!client.cooldowns.has(command.help.name)) {
    client.cooldowns.set(command.help.name, new Collection())
  }

  const timeNow = Date.now()
  const tStamps = client.cooldowns.get(command.help.name)
  const cdAmount = (command.help.cooldowns || 5) * 1000

  if (tStamps.has(message.author.id)) {
    const cdExpirationTime = tStamps.get(message.author.id) + cdAmount
    if (timeNow < cdExpirationTime) {
      const timeLeft = (cdExpirationTime - timeNow) / 1000
      return message.reply(`Patientes ${timeLeft.toFixed(0)} secondes avant de ré-utiliser ta commande \`${command.help.name}\`.`)
    }
  }

  tStamps.set(message.author.id, timeNow)
  setTimeout(() => tStamps.delete(message.author.id), cdAmount)


  command.run(client, message, args, userInfo)
  message.delete()
  elapsedTime = new Date().getTime() - startTime

  console.log(`► Cmd: ${commandName} User: ${message.member.displayName} Exécuté en: ${elapsedTime} ms.`)
}
