var http = require('https')

module.exports = function (bot) {
  return function (msg, pattern) {
    if (pattern[1]) {
      var path = '/api/explorer?sql='
      path += encodeURI(
        'SELECT n.account_id, n.name, p.avatarfull, p.personaname, ' +
        'p.profileurl, n.team_id, n.team_name, n.country_code ' +
        'FROM notable_players n ' +
        'LEFT JOIN players p ON (n.account_id=p.account_id) ' +
        `WHERE name ILIKE '%${pattern[1]}%' ` +
        'LIMIT 100'
      )

      var options = {
        host: 'api.opendota.com',
        path: path,
        headers: { 'Accept': 'application/json' }
      }

      // console.log(options.host + options.path)

      http.request(options, function (res) {
        res.setEncoding('utf8')
        var text = ''
        res.on('data', function (data) {
          text += data
        })

        res.on('end', function () {
          var r = JSON.parse(text)

          if (r.rows && r.rows.length) {
            for (var i = 0; i < r.rows.length; i++) {
              var el = r.rows[i]
              let text = `[${el.name}](https://www.opendota.com/players/${el.account_id}) ` +
                `(as _${el.personaname}_)` +
                `\n*Team:* [${el.team_name}](https://www.dotabuff.com/esports/teams/${el.team_id}), ` +
                `*From:* ${el.country_code}`

              bot.sendPhoto(msg.chat.id, el.avatarfull)
              bot.sendMessage(msg.chat.id, text, {
                parse_mode: 'Markdown',
                disable_web_page_preview: true
              })
            }
          } else {
            bot.sendMessage(msg.chat.id, 'No he encontrado a nadie con ese nombre.')
          }
        })
      }).on('error', function (e) {
        bot.sendMessage(msg.chat.id, 'Wat?')
      }).end()
    } else {
      bot.sendMessage(msg.chat.id, 'Debes indicar sobre quién quieres información. ej: /d2pro Miracle')
    }
  }
}
