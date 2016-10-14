let Roll = require('roll')

module.exports = function (bot) {
  return function (msg, pattern) {
    let roll = new Roll()

    var args = parseArgs(pattern[2])

    var response = 'Tirando ' + args.operation + ' ' + args.nRolls + ' veces.\n'
    if (roll.validate(args.operation)) {
      for (let i = 1; i <= args.nRolls; i++) {
        let result = roll.roll(args.operation)
        response += 'Roll ' + i + ': <b>' + result.result + '</b>'
        response += ' (' + result.rolled + ').\n'
      }

      bot.sendMessage(msg.chat.id, response, { parse_mode: 'HTML' })
    } else {
      bot.sendMessage(msg.chat.id, 'La operación ' + args.operation + ' no es correcta.')
    }
  }
}

let parseArgs = function (args) {
  args = args || ''
  let nRolls = 6
  let operation = '4d6b3'

  if (args.indexOf('x') !== -1) {
    let split = args.split('x')
    nRolls = split[0]
    operation = split[1]
  } else if (args.indexOf('d') !== -1) {
    operation = args
  } else if (args.length > 0) {
    nRolls = args
  }

  return { nRolls, operation }
}
