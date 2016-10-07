var TelegramBot = require('node-telegram-bot-api')
var config = require('../data/config.json')

var token = config.token

// Setup polling way
var bot = new TelegramBot(token, {
  polling: true
})

bot.onText(/\/di (.+)/, require('./commands/di')(bot))
bot.onText(/\/wat/, require('./commands/wat')(bot))
bot.onText(/\/iluminame/, require('./commands/iluminame')(bot))
