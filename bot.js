const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN;

// Usar polling para Railway
const bot = new TelegramBot(token, { polling: true });

// Escuchar mensajes /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "¡Hola! Soy tu bot activo 🚀");
});