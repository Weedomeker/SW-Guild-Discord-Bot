/* eslint-disable quotes */
/* eslint-disable no-octal */
/* eslint-disable no-mixed-operators */
const { CHANNELS } = require('../../util/channels')
const { MessageEmbed, MessageAttachment } = require('discord.js')
const trollImg = new MessageAttachment('./assets/img/troll.png')
const defImg = new MessageAttachment('./assets/img/def.png')
const gvgImg = new MessageAttachment('./assets/img/gvg.png')
const gvoImg = new MessageAttachment('./assets/img/gvo.png')
const fs = require('fs')

module.exports.run = (client, message) => {
  setInterval(() => {
    const d = new Date()
    const weekDay = d.getDay()
    const hrs = d.getHours()
    const mins = d.getMinutes()
    const secs = d.getSeconds()

    // DEF DIMANCHE
    if (weekDay === 0 && hrs === 12 && mins === 00 && secs === 00) {
      client.channels.cache.get(CHANNELS.ANNC.id).send('<@&674895127407230977>')
      const embed = new MessageEmbed()
        .setTitle('Inscriptions GvgR - GvgW - Gvo')
        .setColor('#FF0000')
        .attachFiles(trollImg)
        .setThumbnail('attachment://troll.png')
        .addField(
          'Hello',
          ` Pour vous inscrire en GvgR (PvE contre les bots) merci de cliquer sur l'émote 🤖
          Pour vous inscrire en GvgW (PvP) merci de cliquer sur l'émote ⚔️ **& de mettre vos grosses defs pour toute la semaine !!!!**
          Pour vous inscrire en Gvo merci de cliquer sur l'emote 🛡️ `
        )
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL())

      client.channels.cache
        .get(CHANNELS.ANNC.id)
        .send(embed)
        .then(async (msg) => {
          await msg.react('🤖'), await msg.react('⚔️'), await msg.react('🛡️')
        })
    }

    // ABSENTS TARTA
    if (weekDay === 3 && hrs === 12 && mins === 00 && secs === 00) {
      const readData = fs.readFileSync('config.json')
      const trueData = { start: true }
      const falseData = { start: false }
      const parseData = JSON.parse(readData)
      console.log(`Read json: ${parseData.start}`)
      if (parseData.start === true) {
        const embed = new MessageEmbed()
          .setTitle('⚠ Absence(s) Tarta ⚠')
          .setColor('#FF2000 ')
          .addField(
            'Important',
            `Si vous êtes **totalement** absent Samedi, merci de réagir à l'émote ci-dessous.\nLes absents qui n'ont pas prévenu.. Vous connaissez la suite. 🙂`
          )
          .setTimestamp()
          .setFooter(message.author.username, message.author.avatarURL())
        client.channels.cache
          .get(CHANNELS.ABS.id)
          .send('<@&674895127407230977>')
        client.channels.cache
          .get(CHANNELS.ABS.id)
          .send(embed)
          .then((msg) => {
            msg.react('☝️')
          })
        const falsedataJson = JSON.stringify(falseData)
        fs.writeFileSync('config.json', falsedataJson)
      } else {
        const truedataJson = JSON.stringify(trueData)
        fs.writeFileSync('config.json', truedataJson)
        console.log(`Update json: ${truedataJson}`)
      }
    }

    // 1 VENDREDI sur 2 RAPPEL TARTA
    if (weekDay === 5 && hrs === 20 && mins === 00 && secs === 00) {
      const readData = fs.readFileSync('config.json')
      const parseData = JSON.parse(readData)
      if (parseData.start === false) {
        const embed = new MessageEmbed()
          .setTitle('Pour rappel:')
          .setColor('#FF2000 ')
          .addField(
            'Important',
            `Tartaros est de retour demain donc merci de bien confirmer votre absence si ce n'est pas fait ! Pour les participants, je compte sur vous pour ne pas oublier. Le Goulag, lui, ne vous oubliera pas 😉 `
          )
          .setTimestamp()
          .setFooter(message.author.username, message.author.avatarURL())
        client.channels.cache
          .get(CHANNELS.ABS.id)
          .send('<@&674895127407230977>')
        client.channels.cache.get(CHANNELS.ABS.id).send(embed)
      }
    }

    //VENDREDI TARTA BIS
    if (weekDay === 5 && hrs === 20 && mins === 00 && secs === 00) {
      client.channels.cache.get(CHANNELS.ANNC.id).send('<@&674895127407230977>')
      const embed = new MessageEmbed()
        .setTitle('Rappel')
        .setColor('#FF0000')
        .addField(
          'Pour rappel:',
          `"Tarta bis" (Combat de subjugation) est de retour dans 04h ! Merci de taper les waves de mobs avant Samedi 12h00 ainsi que le roi Slime Samedi entre 12h00 & 23h59 ! `
        )
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL())

      client.channels.cache.get(CHANNELS.ANNC.id).send(embed)
    }
  }, 1000)

  client.channels.cache
    .get(CHANNELS.LOG.id)
    .send('Annonces automatiques activées')
}

module.exports.help = {
  name: 'annonces',
  aliases: ['annonces', 'ann', 'an', 'anc', 'announces'],
  category: 'moderation',
  description: 'Annonce auto',
  isAdmin: false,
  permissions: true,
  args: false,
}
