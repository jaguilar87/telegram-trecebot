module.exports = function (bot, msg, sounds) {
  let i = Math.floor(Math.random() * sounds.length)
  let sound = sounds[i]
  return bot.sendAudio(msg.chat.id, sound.url, { caption: sound.caption })
}
