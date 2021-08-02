/* eslint-disable prefer-destructuring */
const { MessageEmbed } = require("discord.js");

const moment = require("moment");

module.exports.run = (client, message) => {
  const guild = message.guild;

  const embed = new MessageEmbed()
    .setColor("#bbffdd")
    .setThumbnail(guild.iconURL())
    .addField(`Infos du server: **${guild.name}**`,
      `ID: ${guild.id}
  Chef de guilde: ${guild.owner.user.tag}
  Roles: ${guild.roles.cache.size}
  Créé le: ${moment(guild.createdAt).format("DD/MM/YYYY")}
  Channels Textuels: ${guild.channels.cache.filter(ch => ch.type === "text").size}
  Channels Vocaux:  ${guild.channels.cache.filter(ch => ch.type === "voice").size}
  Membres: ${guild.memberCount - 2}
  `);
  message.channel.send(embed);
};

module.exports.help = {
  name: "serverinfo",
  description: "Info sur le discord.",
  aliases: "server",
  category: "misc",
  isAdmin: false,
  permissions: false,
  cooldown: 3,
  args: false
}
