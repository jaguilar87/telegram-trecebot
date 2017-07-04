const fs = require('fs')
const path = require('path')

module.exports = function (bot) {
  return function (msg) {
    let file = fs.createReadStream(path.join(__dirname, '../../data/frases.json'))
    bot.sendDocument(msg.chat.id, file)
  }
}
