require('dotenv').config(); 

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

//bto
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Open the app below 👇', {
    reply_markup: {
      inline_keyboard: [[
        {
          text: "Open Web App",
          web_app: { url: "https://nike-catalog-telegram-app.vercel.app/" }
        }
      ]]
    }
  });
});

bot.on('polling_error', (error) => {
  console.log('Polling error:', error);
});

bot.on('webhook_error', (error) => {
  console.log('Webhook error:', error);
});

console.log('Bot is up and running...');