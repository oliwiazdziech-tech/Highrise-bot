const Highrise = require("highrise.sdk").default;

const bot = new Highrise({
  token: process.env.BOT_TOKEN,
  room: process.env.ROOM_ID
});

bot.on("ready", (session) => {
  console.log("Bot is online!");
});

bot.on("chatCreate", async (user, message) => {
  if (message.toLowerCase() === "hello") {
    await bot.chat(`Hey ${user.username}! 👋`);
  }
});

bot.on("playerJoin", async (user) => {
  await bot.chat(`Welcome ${user.username}! 🎉`);
});

bot.connect();
