const { CHANNELS } = require("../../util/channels");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const trollImg = new MessageAttachment("./assets/img/troll.png");


module.exports.run = (client, message) => {

  const gvg = message.guild.emojis.cache.get("917469589963698186");
  const embed = new MessageEmbed()
    .setTitle("Inscriptions GvG à 19h30!")
    .setColor("#FF0000")
    .attachFiles(trollImg)
    .setThumbnail("attachment://troll.png")
    .addField(
      "Hello",
      `Cliquez sur l'emote si vous êtes sûrs & certains d'être assez disponible pour participer convenablement aux GvG de cette semaine.
    Et de mettre vos trolls def!`
    )
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

  client.channels.cache
    .get(CHANNELS.LOG.id)
    .send(embed)
    .then(async msg => {
      await msg.react("⚔️");
    });
};

module.exports.help = {
  name: "embed",
  aliases: ["an", "ann"],
  category: "moderation",
  description: "Envoie un embed !",
  isAdmin: false,
  permissions: true,
  args: false,
  usage: "test"
}
