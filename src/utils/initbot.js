let TelegramBot = require('node-telegram-bot-api')
let fs = require('fs')
let path = require('path')

var file = path.join(__dirname, '../../data/config.json')
if (fs.existsSync(file)) {
  let config = require(file)
  let token = config.token

  if (!token) {
    console.error('ERROR: Token not present in "data/config.json". run "npm run config".')
    process.exit()
  }

  module.exports = new TelegramBot(token, {
    polling: true,
    onlyFirstMatch: true
  })
} else {
  console.error('ERROR: "data/config.json" does not exist. run "npm run config".')
  process.exit()
}
