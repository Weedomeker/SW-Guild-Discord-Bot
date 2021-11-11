const { MessageEmbed } = require("discord.js")
const { CHANNELS } = require("../../util/channels")

module.exports = async (client, member) => {
  const embed = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setColor("#00e51b")
    .setFooter("Un fou nous a rejoint !")
    // .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp()

  client.channels.cache.get(CHANNELS.LOG.id).send(embed)

}


