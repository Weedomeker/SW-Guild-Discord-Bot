/* eslint-disable prefer-destructuring */
const { MessageEmbed } = require("discord.js");

const moment = require("moment");

<<<<<<< HEAD
module.exports.run = async (client, message, args, userInfo) => {
=======
module.exports.run = async (client, message, args, settings, dbUser) => {
>>>>>>> 6ffdc14bbefc21668cd1b8781141aa9b17e637c5
  const user = message.guild.member(message.mentions.users.first());

  if (args[0]) {
    const mentionnedUser = await client.getUser(user);
    message.channel.send(
      `${user}: ${mentionnedUser.lanternes} lanternes restantes.`
    );
  } else {
<<<<<<< HEAD
    message.reply(`Il te reste ${userInfo.lanternes} lanternes.`);
=======
    message.reply(`Il te reste ${dbUser.lanternes} lanternes.`);
>>>>>>> 6ffdc14bbefc21668cd1b8781141aa9b17e637c5
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
