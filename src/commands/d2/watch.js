const http = require('http')
const zlib = require('zlib')

module.exports = function (bot) {
  return (msg, pattern) => {
    if (pattern[1]) {
      let code = pattern[1].trim()
      let index = code.indexOf('@')
      if (index !== -1) code = code.slice(0, index)
      let options = {
        host: 'www.trackdota.com',
        path: `/data/game/${code}/core.json`
      }

      // console.log(options.host + options.path)

      http.request(options, function (res) {
        let gzip = zlib.createGunzip()
        res.pipe(gzip)

        let data = ''
        gzip.on('data', (chunk) => { data += chunk.toString('utf-8') })
        gzip.on('error', () => { bot.sendMessage(msg.chat.id, 'Ese match no existe.') })
        gzip.on('end', () => {
          let r = JSON.parse(data)
          let text = `*${r.league.name}*\n` +
            ` *${r.radiant_team.team_name || '?'}* ` +
            `${r.radiant_series_wins} VS ${r.dire_series_wins} ` +
            `*${r.dire_team.team_name || '?'}*\n` +
            `* GAME  ${r.radiant_series_wins + r.dire_series_wins + 1}* ` +
            `(Best of ${((r.series_type === 0) ? '1' : (r.series_type === 1 ? '3' : '5'))}) \n\n`

          for (var i = 0; i < r.streams.length; i++) {
            var stream = r.streams[i]
            if (!stream.language || stream.language === 'es' || stream.language === 'en') {
              switch (stream.provider) {
                case 'youtube':
                  text += `[Youtube ${stream.embed_id}](http://youtube.com/watch?v=${stream.embed_id}) ${stream.language}\n`
                  break
                case 'twitch':
                  text += `[Twitch ${stream.embed_id}](http://twitch.tv/${stream.embed_id}) ${stream.language}\n`
                  break
              }
            }
          }

          if (r.league.image) {
            bot.sendPhoto(msg.chat.id, 'http://www.trackdota.com/data/images/leagues/' + r.league.id + '.jpg')
          }

          bot.sendMessage(msg.chat.id, text, {
            parse_mode: 'Markdown',
            disable_web_page_preview: true
          })
        })
      })
        .on('error', (e) => { bot.sendMessage(msg.chat.id, 'Wat?') })
        .end()
    } else {
      require('watchall')(bot)
    }
  }
}
