var frases = require('../../data/frases.json')

module.exports = function (bot) {
  return function (msg) {
    var frase = frases[Math.floor(Math.random() * frases.length)]
    bot.sendMessage(msg.chat.id, frase)
  }
}
