const TelegramBot = require('node-telegram-bot-api');

// 🔴 Pega aquí tu token real
const token = '8765910526:AAHL9R0DNus0opUJ6AlXhdqFgHTyA4bHStY'

const bot = new TelegramBot(token, { polling: true });

console.log("Bot encendido...");

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "🔥 Bot funcionando correctamente.");
});
