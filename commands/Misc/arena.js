const { MessageEmbed } = require("discord.js")
const fs = require("fs-extra")
const moment = require("moment")

module.exports.run = (client, message) => {
  const rawData = fs.readFileSync("./SW_Exporter/OPH][Weedo-11182208.json")
  const data = JSON.parse(rawData)
  const guildMembers = data.guild.guild_members
  const stats = fs.statSync("./SW_Exporter/OPH][Weedo-11182208.json")
  const mtime = moment(stats.mtime).format("DD/MM/YYYY HH:mm:ss")
  const db = []
  // moment.unix(guildMembers[k].join_timestamp).format("YYYY/MM/DD")
  // ⚔️

  Object.keys(guildMembers).forEach(k => {
    db.push(guildMembers[k])
  })
  const result = []
  for (let i = 0; i < db.length; i++) {
    db.sort((a, b) => parseFloat(b.arena_score) - parseFloat(a.arena_score))
    result.push(`• ${db[i].arena_score} - ${db[i].wizard_name}`)
  }
  const embed = new MessageEmbed()
    .setColor("#3480eb")
  // .setThumbnail(client.user.displayAvatarURL())
    .addField("⚔️Classement Arene ⚔️", result)
    .setFooter(`Last Update: ${mtime}`)
  message.channel.send(embed)
};

module.exports.help = {
  name: "arena",
  aliases: ["arena", "arene"],
  category: "misc",
  description: "Scores Arene IG",
  isAdmin: false,
  permissions: false,
  args: false
}

