const http = require('http')

var operations = []

module.exports = function (bot) {
  return function (msg, pattern) {
    let endpoint = pattern[1]
    let pos = endpoint.indexOf('@')
    if (pos !== -1) endpoint = endpoint.slice(0, pos)

    if (!endpoint) {
      request(msg, '/operations')
    } else {
      let path = '/' + endpoint
      var opt = operations.filter((i) => { return i.url.startsWith('/' + endpoint) })
      if (opt && opt.length > 0) {
        generateRandomUser(msg).then((user) => {
          if (Array.isArray(user)) {
            console.log(user)
            let i = Math.floor(Math.random() * user.length)
            user = '@' + user[i].user.username
          }
          var scheme = opt[0]
          let nextField = 2
          scheme.fields.forEach((field) => {
            if (field.field === 'from') {
              path += '/@' + msg.from.username
            } else if (field.field === 'name') {
              path += '/' + (pattern[nextField] || user)
              nextField++
            } else {
              path += '/' + (pattern[nextField] || field.name)
              nextField++
            }
          })

          request(msg, path)
        })
      } else {
        // Blind request
        if (pattern[2]) path += '/' + pattern[2]
        if (pattern[3]) path += '/' + pattern[3]
        path += '/' + '@' + msg.from.username
        request(msg, path)
      }
    }
  }

  function request (msg, url) {
    let options = {
      host: 'www.foaas.com',
      path: url,
      headers: { 'Accept': 'application/json' }
    }

    http.request(options, function (res) {
      res.setEncoding('utf8')
      let text = ''
      res.on('data', function (data) {
        text += data
      })

      res.on('end', function () {
        let frase = ''
        if (url === '/operations') {
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

  function parseOperations (data) {
    operations = JSON.parse(data)

    let response = 'Fuck what? \n'
    operations.forEach((opt) => {
      response += '/f_'
      opt.url.split('/').forEach((part) => {
        if (part && part !== ':from') response += part + ' '
      })
      response += '\n'
    })

    return response
  }

  function parseResponse (data) {
    var resp = JSON.parse(data)
    var frase = resp.message // + '\n' + resp.subtitle
    return frase
  }

  function generateRandomUser (msg) {
    if (msg.chat.type === 'group' || msg.chat.type === 'supergroup') {
      return bot.getChatAdministrators(msg.chat.id)
    } else {
      return new Promise((resolve, reject) => { resolve('@' + msg.from.username) })
    }
  }
}
