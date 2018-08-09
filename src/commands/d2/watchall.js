const request = require('request');
const {promisify} = require('util');

const get = promisify(request.get);

module.exports = async function(bot, msg) {
  const matches = await fetchMatches();
  const filteredMatches = await filterMatches(matches);
  const response = await generateResponse(filteredMatches);

  bot.sendMessage(msg.chat.id, response, {
    parse_mode: 'Markdown',
    disable_web_page_preview: true,
  });
};

async function fetchMatches() {
  const response = await get({
    url: 'http://www.trackdota.com/data/games_v2.json',
    gzip: true,
  });
  const data = JSON.parse(response.body);

  return data.enhanced_matches;
}

function filterMatches(matches) {
  matches.forEach((match) => {
    match.games = match.games.filter((game) => game.streams);
  });

  return matches.filter((match) => match.games.length);
}

function generateResponse(matches) {
  let response = '';

  for (const match of matches) {
    response += `*${match.name}*\n`;

    for (const game of match.games) {
      if (game.streams > 0) {
        response += `🎮 *${game.radiant_team.team_name || '?'}* ` +
          `${game.radiant_series_wins} VS ${game.dire_series_wins} ` +
          `*${game.dire_team.team_name || '?'}* ` +
          `/d2watch${game.id}`;
      }
    }
  }

  if (!response) {
    response = 'Nada que ver 😣';
  }

  return response;
}
