let getQuote = require('../utils/getquote')

module.exports = function (bot) {
  return function (msg) {
    bot.sendMessage(msg.chat.id, getQuote())
  }
}
