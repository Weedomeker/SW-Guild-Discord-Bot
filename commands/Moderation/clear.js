const { MessageEmbed } = require("discord.js");
const {  CHANNELS } = require("../../util/channels");

module.exports.run = async (client, message, args) => {
  if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100))
    return message.reply(`${message.author} uniquement un nombre entre 1 et 100 !`);

  const messages = await message.channel.messages.fetch({
    limit: Math.min(args[0], 100),
    before: message.id
  });

  await message.channel.bulkDelete(messages);

  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor("#0C82FF")
    .setDescription(`**Action:** Suppression msgs.\n${args[0]} messages supprimés.\n**Channel:**${message.channel}`)
    .setTimestamp();

  client.channels.cache.get(CHANNELS.LOG.id).send(embed);
};

module.exports.help = {
  name: "clear",
  aliases: ["clear", "cls", "del"],
  category: "moderation",
  description: "Suppression des messages",
  permissions: true,
  isAdmin: false,
  cooldown: 3,
  args: true,
  usage: "<nbr (1-100)>"
}