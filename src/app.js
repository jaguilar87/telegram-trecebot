global.frases = require('./utils/frases')
let bot = require('./utils/initbot')

// Greet
bot.onText(/\/start/i, require('./commands/start')(bot))

// Set up commands
bot.onText(/\/d(?:i)*(?:@\w*)*\s+(.+)/i, require('./commands/di')(bot))
bot.onText(/\/i(?:luminame)*(?:@\w*)*/i, require('./commands/iluminame')(bot))
bot.onText(/\/a(?:dd)*(?:@\w*)*\s+(.+)/i, require('./commands/add')(bot))
bot.onText(/\/r(?:oll)*(?:@\w*)*\s+(.+)/i, require('./commands/roll')(bot))
bot.onText(/\/(?:rs|rollstats)(?:@\w*)*\s*(.*)/i, require('./commands/rollstats')(bot))
bot.onText(/\/sn(?:@\w*)*\s*(.*)/i, require('./commands/siono')(bot))

// Fuck
bot.onText(/\/(?:fuck|f)(?:@\w*)*(?:$|\s(\w*)\s*(\w*)\s*(.*))/i, require('./commands/fuck')(bot))
bot.onText(/\/f_(\w*)(?:@\w*)*\s*(\w*)\s*(.*)/i, require('./commands/fuck')(bot))

// Dotka
bot.onText(/\/d2pro(?:@\w*)*\s*(.*)/i, require('./commands/d2/pro')(bot))
bot.onText(/\/d2watch(?:@\w*)*$/i, require('./commands/d2/watchall')(bot))
bot.onText(/\/d2watch(.+)(?:@\w*)*/i, require('./commands/d2/watch')(bot))

// Say
bot.onText(/\/magic(?:@\w*)*/i, require('./commands/say/magic')(bot))
bot.onText(/\/silence(?:@\w*)*/i, require('./commands/say/silence')(bot))
bot.onText(/\/rekt(?:@\w*)*/i, require('./commands/say/rekt')(bot))
bot.onText(/\/fight(?:@\w*)*/i, require('./commands/say/fight')(bot))

console.log('Trecebot running!')
