const { MessageEmbed } = require("discord.js");
const {  CHANNELS } = require("../../util/channels");
const ms = require("ms");

module.exports.run = async (client, message, args) => {
  let user = message.guild.member(message.mentions.users.first());
  let muteRole = message.guild.roles.cache.find(r => r.name === "Le Goulag !");
  let muteTime = args[1] || "60";

  if (!muteRole) {
    muteRole = await message.guild.roles.create({
      data: {
        name: "Le Goulag !",
        color: "#ff00d1",
        permissions: []
      }
    });

    message.guild.channels.cache.forEach(async (channel, id) => {
      await channel.updateOverwrite(muteRole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false,
        CONNECT: false
      });
    });
  }
  await user.roles.add(muteRole.id);
  message.channel.send(`<@${user.id}> dégages au Goulag pendant ${ms(ms(muteTime, { long: true }))} pour te calmer un peu !`);

  setTimeout(() => {
    user.roles.remove(muteRole.id);
    console.log(`${user.id}: Fin de la période de mute.`);
  }, ms(muteTime));

  const embed = new MessageEmbed()
    .setAuthor(`${user.user.username}`, user.user.avatarURL())
    .setColor("#FFAE00")
    .setDescription(`**Action**:\nmute: ${ms(ms(muteTime))}`)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

  client.channels.cache.get(CHANNELS.LOG.id).send(embed);
};

module.exports.help = {
  name: "mute",
  aliases: ["mute", "mu", "m"],
  category: "moderation",
  description: "Mute l'utilisateur mentionné.",
  permissions: true,
  isAdmin: true,
  cooldown: 3,
  args: true,
  usage: "<@user> <time>"
}