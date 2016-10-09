let fs = require('fs')
let path = require('path')

module.exports = function (bot) {
  return function (msg, match) {
    global.frases.push(match[2])
    fs.writeFileSync(path.join(__dirname, '../../data/frases.json'), JSON.stringify(global.frases))

    bot.sendMessage(msg.chat.id, '<b>Lo recordaré.</b> Genial como siempre.', { parse_mode: 'HTML' })
  }
}
