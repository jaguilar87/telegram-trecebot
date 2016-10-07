var TelegramBot = require('node-telegram-bot-api')

var token = '207668220:AAG6wqIq8BDiYl1tRyOLDrAc2VcoGKDIhCk'
  // Setup polling way
var bot = new TelegramBot(token, {
  polling: true
})

bot.onText(/\/di (.+)/, require('./commands/di')(bot))
bot.onText(/\/wat/, require('./commands/wat')(bot))
bot.onText(/\/iluminame/, require('./commands/iluminame')(bot))
