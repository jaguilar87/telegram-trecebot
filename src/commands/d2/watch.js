const request = require('request');
const {promisify} = require('util');

const get = promisify(request.get);

module.exports = async function(bot, msg, pattern) {
  if (!pattern[1]) {
    return require('./watchall')(bot, msg, pattern);
  }

  const code = parseCode(pattern[1]).trim();
  const match = await fetchMatch(code);
  sendResponse(match, bot, msg);
};

function parseCode(code) {
  code = code.trim();
  const index = code.indexOf('@');

  return (index === -1) ? code : code.slice(0, index);
}

async function fetchMatch(code) {
  const response = await get({
    url: `http://www.trackdota.com/data/game/${code}/core.json`,
    gzip: true,
  });
  return JSON.parse(response.body);
}

function sendResponse(match, bot, msg) {
  let response = `*${match.league.name}*\n` +
    ` *${match.radiant_team.team_name || '?'}* ` +
    `${match.radiant_series_wins} VS ${match.dire_series_wins} ` +
    `*${match.dire_team.team_name || '?'}*\n` +
    `  *GAME  ${match.radiant_series_wins + match.dire_series_wins + 1}* ` +
    `(Best of ${((match.series_type === 0) ? '1' : (match.series_type === 1 ? '3' : '5'))}) \n\n`;

  for (let i = 0; i < match.streams.length; i++) {
    let stream = match.streams[i];
    if (!stream.language || stream.language === 'es' || stream.language === 'en') {
      switch (stream.provider) {
      case 'youtube':
        response += `    [Youtube ${stream.embed_id}](http://youtube.com/watch?v=${stream.embed_id}) ${stream.language}\n`;
        break;
      case 'twitch':
        response += `    [Twitch ${stream.embed_id}](http://twitch.tv/${stream.embed_id}) ${stream.language}\n`;
        break;
      }
    }
  }

  if (match.league.image) {
    bot.sendPhoto(
      msg.chat.id, `http://www.trackdota.com/data/images/leagues/${match.league.id}.jpg`, {
        caption: response,
        parse_mode: 'Markdown',
      });
  } else {
    bot.sendMessage(msg.chat.id, response, {
      parse_mode: 'Markdown',
      disable_web_page_preview: true,
    });
  }
}
