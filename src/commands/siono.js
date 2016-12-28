var http = require('https')

module.exports = function (bot) {
  return function (msg, pattern) {
    var path = '/api/'
    if (pattern[2]) path += '?forced=' + pattern[2]

    var options = {
      host: 'www.yesno.wtf',
      path: path,
      headers: { 'Accept': 'application/json' }
    }

    console.log(options.host + options.path)

    http.request(options, function (res) {
      res.setEncoding('utf8')
      var text = ''
      res.on('data', function (data) {
        text += data
      })

      res.on('end', function () {
        var r = JSON.parse(text)

        bot.sendPhoto(msg.chat.id, r.image, { caption: r.answer })
      })
    }).on('error', function (e) {
      bot.sendMessage(msg.chat.id, 'Wat?')
    }).end()
  }
}
