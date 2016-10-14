var http = require('http')

module.exports = function (bot) {
  return function (msg, pattern) {
    var endpoint = pattern[2] || 'operations'

    var path = '/' + endpoint
    if (pattern[3]) path += '/' + pattern[3]
    if (pattern[4]) path += '/' + pattern[4]
    if (endpoint !== 'operations') path += '/' + '@' + msg.from.username

    var options = {
      host: 'www.foaas.com',
      path: path,
      headers: { 'Accept': 'application/json' }
    }

    http.request(options, function (res) {
      res.setEncoding('utf8')
      var text = ''
      res.on('data', function (data) {
        text += data
      })

      res.on('end', function () {
        var frase = ''
        if (endpoint === 'operations') {
          frase = parseOperations(text)
        } else {
          frase = parseResponse(text)
        }
        bot.sendMessage(msg.chat.id, frase)
      })
    }).on('error', function (e) {
      bot.sendMessage(msg.chat.id, 'Fuck this command you have just written ¬¬')
    }).end()
  }
}

let parseOperations = function (data) {
  var opts = JSON.parse(data)
  var response = 'Fuck what? \n'
  opts.forEach((opt) => {
    response += '/fuck'
    opt.url.split('/').forEach((part) => {
      if (part && part !== ':from') response += ' ' + part
    })
    response += '\n'
  })
  return response
}

let parseResponse = function (data) {
  var resp = JSON.parse(data)
  var frase = resp.message // + '\n' + resp.subtitle
  return frase
}
