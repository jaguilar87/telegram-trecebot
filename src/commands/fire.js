const fs = require('fs');
const path = require('path');

let cached;

module.exports = async function(bot, msg) {
  let file = cached || fs.createReadStream(path.join(__dirname, '../../assets/cartabuena.pdf'));
  const data = await bot.sendDocument(msg.chat.id, file);
  cached = data.document.file_id;
};
