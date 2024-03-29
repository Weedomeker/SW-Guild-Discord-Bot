const startTime = new Date().getTime()
let elapsedTime = 0
const { Client, Collection } = require('discord.js')
const { loadCommands, loadEvents } = require('./util/loader')

const client = new Client({ partials: ['USER', 'MESSAGE', 'CHANNEL', 'REACTION'] })
require('./util/functions')(client)
client.config = require('./config')
client.mongoose = require('./util/mongoose')
;['commands', 'cooldowns'].forEach((x) => (client[x] = new Collection()))

loadCommands(client)
loadEvents(client)
client.mongoose.init()
client.login(client.config.TOKEN)
elapsedTime = new Date().getTime() - startTime
console.log(`Exécuté en: ${elapsedTime / 1000} secs.`)
