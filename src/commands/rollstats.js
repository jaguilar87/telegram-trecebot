const Roll = require('roll');

module.exports = function(bot, msg, pattern) {
  const roll = new Roll();
  const {nRolls, operation} = parseArgs(pattern[1]);

  if (!roll.validate(operation)) {
    bot.sendMessage(msg.chat.id, 'La operación ' + operation + ' no es correcta.');
    return;
  }

  let response = 'Tirando ' + operation + ' ' + nRolls + ' veces.\n';
  for (let i = 1; i <= nRolls; i++) {
    const result = roll.roll(operation);
    response += `🎲 Roll ${i}: ${result.rolled}. *Total: ${result.result}*\n`;
  }

  bot.sendMessage(msg.chat.id, response, {parse_mode: 'Markdown'});
};

function parseArgs(args) {
  args = args || '';
  let nRolls = 6;
  let operation = '4d6b3';

  if (args.indexOf('x') !== -1) {
    const split = args.split('x');
    nRolls = split[0];
    operation = split[1];
  } else if (args.indexOf('d') !== -1) {
    operation = args;
  } else if (args.length > 0) {
    nRolls = args;
  }

  return {nRolls, operation};
}
