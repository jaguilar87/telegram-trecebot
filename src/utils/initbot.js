const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../../data/config.json');

if (!fs.existsSync(file)) {
  console.error('ERROR: "data/config.json" does not exist. run "npm run config".');
  process.exit(1);
}

const config = require(file);
const token = config.token;

if (!token) {
  console.error('ERROR: Token not present in "data/config.json". run "npm run config".');
  process.exit(1);
}

module.exports = new TelegramBot(token, {
  polling: true,
  onlyFirstMatch: true,
});
