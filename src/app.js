let TelegramBot = require('node-telegram-bot-api')
let config = require('../data/config.json')

let token = config.token
global.frases = require('../data/frases.json')

// Setup polling way
let bot = new TelegramBot(token, {
  polling: true
})

bot.onText(/\/di (.+)/, require('./commands/di')(bot))
bot.onText(/\/wat/, require('./commands/wat')(bot))
bot.onText(/\/iluminame/, require('./commands/iluminame')(bot))
bot.onText(/\/add (.+)/, require('./commands/add')(bot))
  // bot.onText(/\/meme/, require('./commands/meme')(bot))
