module.exports = (bot) => {
  return (msg) => {
    bot.sendMessage(msg.chat.id, 'No convirtamos esta violación en un asesinato.')
  }
}
