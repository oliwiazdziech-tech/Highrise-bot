const { Highrise } = require("highrise.bot");

// Print variables to debug
console.log("Token exists:", !!process.env.BOT_TOKEN);
console.log("Room ID exists:", !!process.env.ROOM_ID);
console.log("Room ID value:", process.env.ROOM_ID);

const bot = new Highrise(
  ["ChatEvent", "UserJoinedEvent", "UserLeftEvent"],
  {
    token: process.env.BOT_TOKEN,
    room: process.env.ROOM_ID
  }
);

bot.on("ready", () => {
  console.log("Bot is online and connected!");
});

bot.on("chatCreate", async (user, message) => {
  if (message.toLowerCase() === "hello") {
    await bot.message.send(`Hey ${user.username}! 👋`);
  }
});

bot.on("playerJoin", async (user) => {
  await bot.message.send(`Welcome ${user.username}! 🎉`);
});

bot.connect();
