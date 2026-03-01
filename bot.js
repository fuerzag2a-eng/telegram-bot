const TelegramBot = require('node-telegram-bot-api');

// 🔴 Pega aquí tu token real
const token = process.env.TOKEN;

const bot = new TelegramBot(token, { polling: true });

console.log("Bot encendido...");

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "🔥 Bot funcionando correctamente.");
});
