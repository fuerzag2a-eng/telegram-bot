const TelegramBot = require('node-telegram-bot-api');

// Tu token de Telegram lo pondrás como variable de entorno en Railway
const token = process.env.TOKEN;

const bot = new TelegramBot(token, { polling: true });

// Detectar /start en cualquier chat
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  // Detectar /start
  if (text && text.toLowerCase() === '/start') {
    bot.sendMessage(chatId, "¡Hola! Soy tu bot activo 🚀");
  }

  // Para depurar: ver todos los mensajes que llegan
  console.log(chatId, text);
});