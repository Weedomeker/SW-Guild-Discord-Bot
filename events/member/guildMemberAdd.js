const { MessageEmbed } = require("discord.js");
const { CHANNELS } = require("../../util/constants");

module.exports = (client, member) => {
  const embed = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setColor("#00e51b")
    .setFooter("Un fou nous a rejoint !")
    // .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp();

  client.channels.cache.get(CHANNELS.LOG.id).send(embed);
};

