const { MessageEmbed, MessageAttachment, Util } = require('discord.js')
const { CHANNELS } = require('../../util/channels')
const fetchCoupons = require('../../util/fetchCoupons')
const { JsonDB, Config } = require('node-json-db')
const db = new JsonDB(new Config('db', true, false, '/'))
const img = new MessageAttachment('./assets/img/coupon-logo.png')

module.exports.run = async (client, message, args) => {
  let api = []

  //Last Coupons
  if (args[0] === 'last') {
    const data = await fetchCoupons('*')
    for (const el of data) {
      api.push(
        `**Android:** ${el.code}\n**Ios:** [Lien withhive](${el.url})\n**Item(s):** ${el.items}\n<:pouce:1028488281891033220> ${el.score}\n\n`
      )
    }

    const embed = new MessageEmbed()
      .setTitle('Derniers coupons valides:')
      .setColor('#FF8033')
      .attachFiles(img)
      .setThumbnail('attachment://coupon-logo.png')
      .addField('-------------------------', `${api.join('')}`)
      .setTimestamp()
    await message.channel.send(embed)
  }
  //All Coupons
  if (args[0] === 'all') {
    const data = await fetchCoupons()
    for (const el of data) {
      api.push(`${el.code}\n${el.items}\n`)
    }
    const embed = new MessageEmbed().setColor('#FF8033').setTitle('Liste de(s) code(s):').setTimestamp()
    let chunks = Util.splitMessage(api.join('\n'), {
      char: '\n\n',
      maxLength: 2000,
    })

    if (chunks.length > 1) {
      chunks.forEach(async (chunk, i) => {
        await message.channel.send(
          embed
            .setDescription(chunk)
            .setTimestamp()
            .setFooter(`Part ${i + 1} / ${chunks.length}`)
        )
      })
    } else {
      await message.channel.send(embed.setDescription(chunks[0]))
    }
  }
  //Selected Coupon
  if (args[0] >= 0) {
    const data = await fetchCoupons(args[0])
    api.push({
      code: data.code,
      url: data.url,
      item: data.items,
      score: data.score,
    })
    const embed = new MessageEmbed()
      .setTitle('Nouveau code coupon trouvé !')
      .setColor('#FF8033')
      .attachFiles(img)
      .setThumbnail('attachment://coupon-logo.png')
      .addFields(
        { name: 'android:', value: `${api[0].code}`, inline: true },
        { name: 'ios:', value: `[Lien withhive](${api[0].url})`, inline: true },
        { name: '\u200b', value: '\u200b', inline: true },
        { name: 'item(s):', value: `${api[0].item}`, inline: true },
        { name: 'vérifié:', value: `${api[0].score} fois.`, inline: true }
      )
      .setFooter(`<@code last> pour voir les derniers codes valides.\n`)
      .setTimestamp()
    await message.channel.send(embed)
  }

  //Auto msg Coupons
  if (args[0] === 'on') {
    await client.channels.cache.get(CHANNELS.LOG.id).send('`Code auto activé`')

    const scanCode = async () => {
      const compare = (a, b) => {
        let result = JSON.stringify(a) === JSON.stringify(b)
        //console.log(result)
        return result
      }
      let oldCode = await db.getData('/')
      const data = await fetchCoupons(0)
      if (compare(data.code, oldCode.code) == false) {
        const embed = new MessageEmbed()
          .setTitle('Nouveau code coupon trouvé !')
          .setColor('#FF8033')
          .attachFiles(img)
          .setThumbnail('attachment://coupon-logo.png')
          .addFields(
            { name: 'android:', value: `${data.code}`, inline: true },
            { name: 'ios:', value: `[Lien withhive](${data.url})`, inline: true },
            { name: '\u200b', value: '\u200b', inline: true },
            { name: 'item(s):', value: `${data.item}`, inline: true },
            { name: 'vérifié:', value: `${data.score} fois.`, inline: true }
          )
          .setFooter(`<@code last> pour voir les derniers codes valides.\n`)
          .setTimestamp()
        await client.channels.cache.get(CHANNELS.LOG.id).send(embed)
        await db.push('/', data)
      } else {
        await client.channels.cache.get(CHANNELS.LOG.id).send('Search codes...')
        await db.reload()
      }
    }
    setInterval(() => {
      scanCode()
    }, 1000 * 10)
  }
}

module.exports.help = {
  name: 'code',
  aliases: ['codes, coupon, coupons'],
  category: 'misc',
  description: 'Affiche les codes coupons provenant du site https://swq.jp/',
  isAdmin: false,
  permissions: false,
  cooldown: 0,
  args: true,
  usage: 'code<all>, code<last>, code<nbr>',
}
