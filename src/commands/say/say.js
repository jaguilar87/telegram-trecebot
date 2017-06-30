module.exports = function (bot, sounds, img) {
  return (msg, pattern) => {
    let i = Math.floor(Math.random() * sounds.length)
    let sound = sounds[i]
    if (img) bot.sendPhoto(msg.chat.id, img)
    bot.sendAudio(msg.chat.id, sound.url, { caption: sound.caption })
  }
}
