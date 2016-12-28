let TelegramBot = require('node-telegram-bot-api')
let fs = require('fs')

if (fs.existsSync('./data/config.json')) {
  let config = require('../../data/config.json')
  let token = config.token

  if (!token || token === 'TOKEN_HERE') {
    console.error('ERROR: Token not present in "data/config.json". run "npm run config".')
    process.exit()
  }

  // Setup polling way
  module.exports = new TelegramBot(token, {
    polling: true
  })
} else {
  console.error('ERROR: "data/config.json" does not exist. run "npm run config".')
  process.exit()
}
