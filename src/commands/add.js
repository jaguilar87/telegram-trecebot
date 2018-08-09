const fs = require('fs');
const path = require('path');
const isAdmin = require('../utils/isadmin');

module.exports = async function(bot, msg, match) {
  if (!isAdmin(msg.chat.username)) {
    bot.sendMessage(msg.chat.id, 'No. No me caes bien 🤬', {
      reply_to_message_id: msg.message_id,
    });
    return;
  }

  global.frases.push(match[1]);

  const frasesPath = path.join(__dirname, '../../data/frases.json');
  const content = JSON.stringify(global.frases, null, 2);

  fs.writeFileSync(frasesPath, content);

  bot.sendMessage(msg.chat.id, '*Lo recordaré.* Genial como siempre.', {parse_mode: 'Markdown'});
};
