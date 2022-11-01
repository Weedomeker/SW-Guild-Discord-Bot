const { MessageEmbed } = require('discord.js')
const { CHANNELS } = require('../../util/channels')

module.exports.run = async (client, message, args) => {
  const embed = new MessageEmbed()
    .setColor('#eb4934')
    .addField(
      'Tarta trouvé !!!',
      `
**Du coup comme d'hab :**
• Avant minuit, 1 atq réussie sur lui (normale) pour ceux à qui il reste encore une lanterne
• Une (ou deux) attaque(s) de plus dimanche (et lundi si SS)

Pensez aussi à faire vos lanternes restantes une fois le Tarta trouvé/mort et les jours suivants, les récompenses régalent bien souvent!

Merciiii !
      `
    )
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL())
  await client.channels.cache
    .get(CHANNELS.ANNC.id)
    .send('<@&674895127407230977>')
  await client.channels.cache.get(CHANNELS.ANNC.id).send(embed)
}

module.exports.help = {
  name: 'tarta_clean',
  aliases: ['tc', 'tclean'],
  category: 'tarta',
  description: 'Rush minuit Tarta',
  isAdmin: false,
  permissions: false,
  cooldown: 0,
  args: false,
  usage: '',
}
