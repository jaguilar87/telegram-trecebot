global.frases = require('./utils/frases')
let bot = require('./utils/initbot')

// Set up commands
bot.onText(/\/d(i)* (.+)/i, require('./commands/di')(bot))
bot.onText(/\/w(at)*/i, require('./commands/wat')(bot))
bot.onText(/\/i(luminame)*/i, require('./commands/iluminame')(bot))
bot.onText(/\/a(dd)* (.+)/i, require('./commands/add')(bot))
bot.onText(/\/r(oll)* (.+)/i, require('./commands/roll')(bot))
bot.onText(/\/(rs|rollstats)\s*(.*)/i, require('./commands/rollstats')(bot))
bot.onText(/\/f(uck)*\s*([^\s]*)\s*([^\s]*)\s*(.*)/i, require('./commands/fuck')(bot))
