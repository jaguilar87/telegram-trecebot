module.exports = function(bot, msg, match) {
  return bot.sendMessage(msg.chat.id, match[1]);
};
