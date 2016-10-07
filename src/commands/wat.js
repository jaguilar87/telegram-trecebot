module.exports = function (bot) {
  return function (msg) {
    var chatId = msg.chat.id
      // photo can be: a file path, a stream or a Telegram file_id
    var photo = 'img/404.gif'
    bot.sendDocument(chatId, photo, {
      caption: 'WAAAAT?'
    })
  }
}
