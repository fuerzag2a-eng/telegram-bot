const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN;

const bot = new TelegramBot(token, { polling: true });

// Escuchar todos los mensajes
bot.on('message', (msg) => {
  const text = msg.text;      // el texto del mensaje
  const chatId = msg.chat.id; // el chat donde se envió

  // Detectar /start sin depender de BotFather
  if (text && text.toLowerCase() === '/start') {
    bot.sendMessage(chatId, "¡Hola! Soy tu bot activo 🚀");
  }

  // Opcional: ver todos los mensajes en Logs de Railway
  console.log(chatId, text);
});