const http = require('http')
const zlib = require('zlib')

module.exports = function (bot) {
  return (msg, pattern) => {
    let options = {
      host: 'www.trackdota.com',
      path: `/data/games_v2.json`
    }

    http.request(options, function (res) {
      let gzip = zlib.createGunzip()
      res.pipe(gzip)

      let data = ''
      gzip.on('data', (chunk) => { data += chunk.toString('utf-8') })
      gzip.on('end', () => {
        let r = JSON.parse(data)
        let text = ''
        for (var i = 0; i < r.enhanced_matches.length; i++) {
          let m = r.enhanced_matches[i]
          let matchText = `*${m.name}* \n`
          let gameCount = 0
          for (var j = 0; j < m.games.length; j++) {
            let g = m.games[j]

            if (g.streams > 0) {
              gameCount += 1
              matchText += ` _${g.radiant_team.team_name || '?'}_ ` +
                `${g.radiant_series_wins} VS ${g.dire_series_wins} ` +
                `_${g.dire_team.team_name || '?'}_ ` +
                `[watch](tg://bot_command?command=d2watch)\n`
            }
          }
          if (gameCount) text += matchText + '\n'
        }
        bot.sendMessage(msg.chat.id, text, {
          parse_mode: 'Markdown',
          disable_web_page_preview: true
        })
      })
    })
      .on('error', (e) => { bot.sendMessage(msg.chat.id, 'Wat?') })
      .end()

  }
}
