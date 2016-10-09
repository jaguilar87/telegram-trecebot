module.exports = function (bot) {
  return function (msg, match) {
    var fromId = msg.chat.id
    var resp = match[2]
    bot.sendMessage(fromId, resp)
  }
}
