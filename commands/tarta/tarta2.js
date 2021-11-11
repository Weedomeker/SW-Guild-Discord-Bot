const { MessageEmbed, MessageAttachment } = require("discord.js");
const {  CHANNELS } = require("../../util/channels");
const tarta2Img = new MessageAttachment("./assets/img/tarta2.png");

module.exports.run = (client, message, args) => {
  const nEmo = message.guild.emojis.cache.get("728730210547269736");
  const hardEmo = message.guild.emojis.cache.get("728723168545603675");
  const hellEmo = message.guild.emojis.cache.get("728723184278306849");
  const txt = args;
  const txtMsg = txt.join(" ");

  const embed = new MessageEmbed()
    .setColor("#ff3300")
    .attachFiles(tarta2Img)
    .setThumbnail("attachment://tarta2.png")
    .addField(
      "Pour info:",
      `
      \n**${txtMsg}**\n\n
      ${nEmo} = Normal\n${hardEmo} = Hard\n${hellEmo} = Hell\n
      *Cliquez sur les réacts en fonction de votre niveau d'attaque. Merci !*
      `
    )
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

  client.channels.cache.get(CHANNELS.TARTA.id).send(embed).then(async msg => {
    await msg.react(nEmo);
    await msg.react(hardEmo);
    await msg.react(hellEmo);
  });
};

module.exports.help = {
  name: "tarta2",
  aliases: ["t2"],
  category: "tarta",
  description: "Désigne la cible 2 dans Tarta",
  isAdmin: false,
  permissions: true,
  cooldown: 0,
  args: true,
  usage: "<tonMsg>"
}
