global.frases = require('./utils/frases')
let bot = require('./utils/initbot')

// Set up commands
bot.onText(/\/d(?:i)*(?:@\w*)*\s+(.+)/i, require('./commands/di')(bot))
bot.onText(/\/i(?:luminame)*(?:@\w*)*/i, require('./commands/iluminame')(bot))
bot.onText(/\/a(?:dd)*(?:@\w*)*\s+(.+)/i, require('./commands/add')(bot))
bot.onText(/\/r(?:oll)*(?:@\w*)*\s+(.+)/i, require('./commands/roll')(bot))
bot.onText(/\/(?:rs|rollstats)(?:@\w*)*\s*(.*)/i, require('./commands/rollstats')(bot))
bot.onText(/\/f(?:uck)*(?:@\w*)*[_\s]*([^\s]*)\s*([^\s]*)\s*(.*)/i, require('./commands/fuck')(bot))
bot.onText(/\/sn(?:@\w*)*\s*(.*)/i, require('./commands/siono')(bot))

bot.onText(/\/d2pro(?:@\w*)*\s*(.*)/i, require('./commands/d2/pro')(bot))
bot.onText(/\/d2watch(?:@\w*)*$/i, require('./commands/d2/watchall')(bot))
bot.onText(/\/d2watch(.+)(?:@\w*)*/i, require('./commands/d2/watch')(bot))

console.log('Trecebot running!')
