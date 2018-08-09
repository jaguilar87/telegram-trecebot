const fs = require('fs');
const path = require('path');
const isAdmin = require('../utils/isadmin');

module.exports = async function(bot, msg) {
  if (isAdmin(msg.chat.username)) {
    let file = fs.createReadStream(path.join(__dirname, '../../data/frases.json'));
    return bot.sendDocument(msg.chat.id, file);
  }
};
