const getQuote = require('../utils/getquote');

module.exports = function(bot, msg, pattern) {
  return bot.sendMessage(msg.chat.id, getQuote(pattern[1]));
};
