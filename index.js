const { Highrise } = require("highrise.bot");

// Get variables
const myToken = process.env.token;
const myRoom = process.env.room;

console.log("Token exists:", !!myToken);
console.log("Room exists:", !!myRoom);

const bot = new Highrise(
  ["ChatEvent", "UserJoinedEvent", "UserLeftEvent"],
  {
    token: myToken,
    room: myRoom
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
