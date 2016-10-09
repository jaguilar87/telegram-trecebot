let TelegramBot = require('node-telegram-bot-api')
let config = require('../data/config.json')

let token = config.token
global.frases = require('../data/frases.json')

// Setup polling way
let bot = new TelegramBot(token, {
  polling: true
})

bot.onText(/\/d(i)* (.+)/, require('./commands/di')(bot))
bot.onText(/\/w(at)*/, require('./commands/wat')(bot))
bot.onText(/\/i(luminame)*/, require('./commands/iluminame')(bot))
bot.onText(/\/a(dd)* (.+)/, require('./commands/add')(bot))
bot.onText(/\/r(oll)* (.+)/, require('./commands/roll')(bot))
  // bot.onText(/\/meme/, require('./commands/meme')(bot))
