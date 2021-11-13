
const { Collection } = require("discord.js")
const { Guild } = require("../../models")

module.exports = async (client, message) => {
  const startTime = new Date().getTime()
  let elapsedTime = 0

  if (message.channel.type === "dm") return
  if (message.author.bot) return

  const data = await client.getGuild(message.guild)
  const position = data.users.map(e => e.id).indexOf(message.member.id)
  const userInfo = data.users[position]

  if (message.guild && position == -1) {
    Guild.updateOne(
      { guildID: message.guild.id },
      { $push:
        {
          users:
        {
          id: message.member.id,
          name: message.member.displayName,
          lanternes: 5
        }
        }
      }
    ).then(d => console.log(`${message.member.displayName}: ajouté dans la db.`))
  }

  // const expCd = Math.floor(Math.random() * 19) + 1
  // const expToAdd = Math.floor(Math.random() * 25) + 10

  // if (expCd >= 8 && expCd <= 11) {
  //   // console.log(`Exp gagné: ${expToAdd}`);
  //   await client.addExp(client, message.member, expToAdd)
  // }
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


<<<<<<< HEAD
  command.run(client, message, args, userInfo
  )
=======
  command.run(client, message, args, userInfo)
>>>>>>> 6ffdc14bbefc21668cd1b8781141aa9b17e637c5
  message.delete()
  elapsedTime = new Date().getTime() - startTime

  console.log(`► Cmd: ${commandName} User: ${message.member.displayName} Exécuté en: ${elapsedTime} ms.`)
}
