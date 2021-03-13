const { MessageEmbed } = require("discord.js");
const { MESSAGES, CHANNELS } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
  const embed = new MessageEmbed()
    .setColor("#eb4934")
    .addField(
      "Tarta trouvé !!!",
      `
**Du coup comme d'hab :**
• 1 atq réussie obligatoire sur lui aujourd'hui **ET** demain sinon pas de coffre pour vous.
• **360 points mini** pour ouvrir le coffre
• Un MAX de monde disponible à minuit pile pour taper Tarta et tenter de le finir avant 00h05 !

Merciiii !
      `
    )
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());
  await client.channels.cache.get(CHANNELS.ANNC.id).send("@everyone");
  await client.channels.cache.get(CHANNELS.ANNC.id).send(embed);
};

module.exports.help = MESSAGES.COMMANDS.TARTA.TARTA_CLEAN;
