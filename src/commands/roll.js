const Roll = require('roll');

module.exports = async function(bot, msg, pattern) {
  const roll = new Roll();
  const operation = pattern[1].replace(/\s/g, '') || 'd100';

  if (!roll.validate(operation)) {
    bot.sendMessage(msg.chat.id, '¿Que tire qué? 🤨');
  }

  const result = roll.roll(operation);
  const rolled = result.rolled;
  const frase = '🎲 Rolled: ' + rolled + ' *Total: ' + result.result + '*';

  bot.sendMessage(msg.chat.id, frase, {parse_mode: 'Markdown'});
};
