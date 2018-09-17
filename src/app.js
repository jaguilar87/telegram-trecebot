global.frases = require('./utils/frases');
const bot = require('./utils/initbot');

// // Greet
bot.onText(/\/start/i, processCommand('./commands/start', bot));
bot.onText(/\/di(?:@\w*)?\s+(.+)/i, processCommand('./commands/di', bot));

// Quotes
bot.onText(/\/dump(?:@\w*)?/i, processCommand('./commands/dump', bot));
bot.onText(/\/(?:i|iluminame)(?:@\w*)?(?:\s+|$)(.*)/i, processCommand('./commands/iluminame', bot));
bot.onText(/\/add(?:@\w*)?\s+(.+)/i, processCommand('./commands/add', bot));

// Fire and resign
bot.onText(/\/fire(?:@\w*)?/i, processCommand('./commands/fire', bot));
bot.onText(/\/resign(?:@\w*)?/i, processCommand('./commands/resign', bot));

// Yes or No
bot.onText(/\/sn(?:@\w*)?(?:\s+|$)(.*)/i, processCommand('./commands/sn', bot));

// Roll
bot.onText(/\/(?:roll|r)(?:@\w*)?(?:\s+|$)(.*)/i, processCommand('./commands/roll', bot));
bot.onText(/\/(?:rollstats|rs)(?:@\w*)?(?:\s+|$)(.*)/i, processCommand('./commands/rollstats', bot));

// Dotka
bot.onText(/\/d2pro(?:@\w*)?(?:\s+|$)(.*)/i, processCommand('./commands/d2/pro', bot));
bot.onText(/\/d2watch(?:@\w*)?$/i, processCommand('./commands/d2/watchall', bot));
bot.onText(/\/d2watch(.+)(?:@\w*)?/i, processCommand('./commands/d2/watch', bot));

// Say
bot.onText(/\/fight(?:@\w*)?/i, processCommand('./commands/say/fight', bot));
bot.onText(/\/silence(?:@\w*)?/i, processCommand('./commands/say/silence', bot));
bot.onText(/\/rekt(?:@\w*)?/i, processCommand('./commands/say/rekt', bot));
bot.onText(/\/magic(?:@\w*)?/i, processCommand('./commands/say/magic', bot));

function processCommand(command, bot) {
  return (msg, pattern) => {
    try {
      return require(command)(bot, msg, pattern);
    } catch (err) {
      console.error(err);
      bot.sendMessage(msg.chat.id, 'Wat?', {
        reply_to_message_id: msg.message_id,
      });
    }
  };
}

console.log('Trecebot running!');
