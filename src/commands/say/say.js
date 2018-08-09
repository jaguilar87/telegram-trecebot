const {extname} = require('path');

const cache = {};

module.exports = async function({bot, msg, sounds, images}) {
  const img = randomEntry(images);
  const sound = getCachedFile(randomEntry(sounds));

  return Promise.all([
    sendFile(bot, msg, img),
    sendFile(bot, msg, sound),
  ]);
};

function randomEntry(collection) {
  return collection[Math.floor(Math.random() * collection.length)];
}

function getCachedFile(file) {
  return cache[file] || file;
}

async function sendFile(bot, msg, file) {
  const fileId = cache[file.url];
  const sendable = fileId || file.url;

  let sendMethod;
  switch (extname(file.url)) {
  case '.jpg':
    sendMethod = bot.sendPhoto.bind(bot);
    break;
  case '.mp3':
    sendMethod = bot.sendAudio.bind(bot);
    break;
  default:
  case '.gif':
    sendMethod = bot.sendDocument.bind(bot);
    break;
  }

  try {
    const data = await sendMethod(msg.chat.id, sendable, {
      caption: file.caption,
    });

    if (data.audio) {
      cache[file.url] = data.audio.file_id;
    } else if (data.photo) {
      cache[file.url] = data.photo.file_id;
    } else {
      cache[file.url] = data.document.file_id;
    }
  } catch (err) {
    console.error('"Say" command failed to send file:', file.url);
    console.error(err.message);
  }
}
