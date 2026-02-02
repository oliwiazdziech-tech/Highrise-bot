const { Highrise } = require("highrise-js");

const bot = new Highrise({
  token: process.env.token,
  roomId: process.env.room
});

bot.on("ready", () => {
  console.log("Bot is online and connected!");
});

bot.on("chatMessageCreate", async (user, message) => {
  if (message.toLowerCase() === "hello") {
    await bot.chat.send(`Hey ${user.username}! 👋`);
  }
});

bot.on("playerJoin", async (user) => {
  await bot.chat.send(`Welcome ${user.username}! 🎉`);
});
