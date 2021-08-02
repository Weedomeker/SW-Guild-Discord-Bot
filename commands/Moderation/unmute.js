const { MessageEmbed } = require("discord.js");
const {  CHANNELS } = require("../../util/channels");

module.exports.run = async (client, message, args) => {
  const user = message.guild.member(message.mentions.users.first());
  const muteRole = message.guild.roles.cache.find(r => r.name === "Le Goulag !");

  if (!user.roles.cache.has(muteRole.id)) return message.reply("L'utilisateur mentionné n'est pas mute !");
  user.roles.remove(muteRole.id);
  message.channel.send(`<@${user.id}> sors du Goulag !\n*Il boite un peu...*`);

  const embed = new MessageEmbed()
    .setAuthor(`${user.user.username}`, user.user.avatarURL())
    .setColor("#FFAE00")
    .setDescription(`**Action**: unmute`)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());
  client.channels.cache.get(CHANNELS.LOG.id).send(embed);
};

module.exports.help = {
  name: "unmute",
  aliases: ["unmute", "nomute", "stopmute", "um"],
  category: "moderation",
  description: "Unmute l'utilisateur mentionné.",
  permissions: true,
  isAdmin: true,
  cooldown: 3,
  args: true,
  usage: "<@user>"
}
