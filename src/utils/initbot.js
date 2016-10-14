let TelegramBot = require('node-telegram-bot-api')

let config = require('../../data/config.json')
let token = config.token

if (!token || token === 'TOKEN_HERE') {
  console.error('ERROR: Token not present in data/config.json!')
  process.exit()
}

// Setup polling way
module.exports = new TelegramBot(token, {
  polling: true
})
