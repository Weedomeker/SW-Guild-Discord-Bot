const puppeteer = require('puppeteer')

const url = ' https://swq.jp/l/fr-FR/'

const fetchCoupons = async (code) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page
    .goto(url)
    .then((res) => {
      if (res.status() != 200) {
        return console.log('Status error: ', res.status())
      }
    })
    .catch((err) => console.log(err))
  await page.waitForSelector('a.label-code')

  const data = await page.evaluate(() => {
    const data = []
    const elements = document.querySelectorAll('#coupons > tr')
    for (const el of elements) {
      const code = el.querySelector('td:nth-child(1)').textContent.trim()
      const urlSrc = el.querySelector('td:nth-child(1) > .label-code')
      const row = el.querySelector('td:nth-child(2)')
      const items = row.querySelectorAll('img')
      const score = parseInt(
        el.querySelector('td:nth-child(3)').textContent.trim()
      )
      const qty = row.querySelectorAll('.qty')
      const url = []
      const item = []
      const img = []
      const getEmojis = (emoji) => {
        const emojis = {
          'Vélin mystique': '<:vm:1026063830347939860>',
          "Vélin d'eau": '<:vw:1026063831799173150>',
          'Vélin de vent': '<:vwd:1026063832759681078>',
          Mana: '<:mana:1026063827583910009>',
          Energie: '<:nrg:1026063825889415179>',
          "Pierres d'invocation": '<:stn:1026063834571624498>',
          Cristal: '<:cryst:1026063824517857380>',
          'Vélin de feu': '<:vf:1026063828850577498>',
          default: undefined,
        }
        return emojis[emoji] || emojis['default']
      }

      if (urlSrc !== null) {
        url.push(urlSrc.href.trim())
      }
      for (let i = 0; i < items.length; i++) {
        item.push(getEmojis(items[i].title), qty[i].textContent.trim())
        img.push(items[i].src)
      }

      data.push({
        code: code,
        url: url.join(''),
        items: item.join(' '),
        score: score,
        icon: img,
      })
    }
    return data
  })
  await browser.close()
  if (code === undefined) {
    //console.table(data)
    return data
  }
  if (code === '*') {
    const dataFilter = data.filter((x) => x.url !== '')
    //console.table(dataFilter)
    return dataFilter
  }
  if (code >= 0) {
    //console.table(data[code])
    return data[code]
  }
}
module.exports = fetchCoupons
