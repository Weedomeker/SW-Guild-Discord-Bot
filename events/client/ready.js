/* eslint-disable no-octal */
const { MessageEmbed } = require("discord.js")

module.exports = async client => {
  console.log(`Le bot ${client.user.tag} est connecté !`)
  client.user.setPresence({
    activity: {
      name: "ZiziCoptère",
      type: "WATCHING"
    },
    status: "online"
  })

  const embed = new MessageEmbed()
    .setTitle("Etat du bot:")
    .setColor("#00e51b")
    .setThumbnail(client.user.displayAvatarURL())
    .addField("Bot opérationnel !", "Youhouuu 😺\n\nPenses à relancer les annonces auto !!!")
  // .setImage(client.user.displayAvatarURL())
    .setTimestamp()
  await client.channels.cache.get("733684325870207126").send(embed)
}
