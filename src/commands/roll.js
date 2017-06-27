let Roll = require('roll')

module.exports = function (bot) {
  return function (msg, pattern) {
    let roll = new Roll()
    let operation = pattern[1]
    if (roll.validate(operation)) {
      let result = roll.roll(operation)
      let rolled = result.rolled
      let frase = 'Rolled: ' + rolled + ' <b>Total: ' + result.result + '</b>'
      bot.sendMessage(msg.chat.id, frase, { parse_mode: 'HTML' })
    } else {
      bot.sendMessage(msg.chat.id, '¿Que tire qué?')
    }
  }
}
