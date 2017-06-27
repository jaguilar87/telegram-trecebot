module.exports = function (bot) {
  return function (msg, match) {
    var fromId = msg.chat.id
    var resp = match[1]
    bot.sendMessage(fromId, resp)
  }
}
