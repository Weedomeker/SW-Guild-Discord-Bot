/* eslint-disable prefer-destructuring */
const { MessageEmbed } = require("discord.js");

const moment = require("moment");

module.exports.run = async (client, message, args, userInfo) => {
  const user = message.guild.member(message.mentions.users.first());

  if (args[0]) {
    const mentionnedUser = await client.getUser(user);
    message.channel.send(
      `${user}: ${mentionnedUser.lanternes} lanternes restantes.`
    );
  } else {
    message.reply(`Il te reste ${userInfo.lanternes} lanternes.`);
  }
};

module.exports.help = {
  name: "userinfo",
  description: "Info sur toi même ou un membre de la guilde.",
  aliases: "user",
  category: "misc",
  isAdmin: false,
  permissions: false,
  cooldown: 3,
  usage: "<command_name> <member>",
  args: false
}
