const { Highrise } = require("highrise.bot");

const bot = new Highrise(
  process.env.BOT_TOKEN,
  process.env.ROOM_ID
);

bot.on("ready", () => {
  console.log("Bot is online!");
});

bot.on("chat", async (user, message) => {
  if (message.toLowerCase() === "hello") {
    await bot.chat.send(`Hey ${user.username}! 👋`);
  }
});

bot.on("join", async (user) => {
  await bot.chat.send(`Welcome ${user.username}! 🎉`);
});

bot.connect();
