const { CHANNELS } = require("../../util/channels");
module.exports = async (client, messageReaction, user) => {
  const { message } = messageReaction;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;
  const channel = message.guild.channels.cache.find(c => c.id === CHANNELS.TARTA.id);
  let lanterne = 5;

  if (messageReaction.partial) {
    await messageReaction.fetch();
    return;
  }

  if (member.user.bot) return;

  if (["Normal", "Hard", "Hell"].includes(emoji) && message.channel.id === channel.id) {
    switch (emoji) {
    case "Normal":
      message.channel.send(`${member}: attaque annulée !`);
      break;
    case "Hard":
      message.channel.send(`${member}: attaque annulée !`);
      break;
    case "Hell":
      message.channel.send(`${member}: attaque annulée !`);
      break;
    }
  }
  if (emoji === "✅" && message.channel.id === channel.id) await message.edit(`${message.content}`);
};
