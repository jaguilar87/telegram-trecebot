const request = require('request');
const {promisify} = require('util');

const get = promisify(request.get);

module.exports = async function(bot, msg, pattern) {
  const force = pattern[1] ? `?force=${pattern[1]}` : '';
  const response = await get('https://www.yesno.wtf/api/' + force);
  const data = JSON.parse(response.body);

  bot.sendVideo(msg.chat.id, data.image, {caption: data.answer});
};
