let Jimp = require('jimp')
let path = require('path')
let getQuote = require('../utils/getquote')
let images = require('../../data/imagerestrains.json')

module.exports = function (bot) {
  return function (msg) {
    let error = function (err) {
      bot.sendMessage(msg.chat.id, '<b>AUCH.</b> Algo ha salido mal.', { parse_mode: 'HTML' })
      console.error(err)
      console.error(imgData)
    }

    var imgData = images[Math.floor(Math.random() * images.length)]
    Jimp.read(path.join(__dirname, '../../img/', imgData.src)).then(function (img) {
      Jimp.loadFont(path.join(__dirname, '../../fonts/font.fnt')).then(function (font) {
        var frase = getQuote() + ' --Marc'

        // .greyscale()
        img.scaleToFit(600, 600)
          .print(font, imgData.x, imgData.y, frase, imgData.width)
          .getBuffer(Jimp.MIME_JPEG, function (err, stream) {
            if (err) error(err)
            bot.sendPhoto(msg.chat.id, stream)
          })
      }).catch(error)
    }).catch(error)
  }
}
