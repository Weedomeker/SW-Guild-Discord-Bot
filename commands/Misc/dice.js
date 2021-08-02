const { MessageEmbed, MessageAttachment } = require("discord.js");
const randomDice = () => Math.floor(Math.random() * 6) + 1;
const diceImg = new MessageAttachment("./assets/img/dice.png");



module.exports.run = (client, message, args) => {
  const embed = new MessageEmbed()
    .setColor("#d54e12")
    .setTitle("Lancé de dés !")
    .attachFiles(diceImg)
    .setThumbnail("attachment://dice.png")
    .addFields(
      { name: "Résultat", value: randomDice(), inline: true }
    );
  message.channel.send(embed);
};

module.exports.help = {
  name: "dice",
  description: "Lancé de dés !",
  aliases: "d",
  category: "misc",
  isAdmin: false,
  permissions: false,
  cooldown: 3,
  args: false
}