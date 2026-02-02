const { Highrise } = require("highrise.bot");

// TEMPORARY: Hardcode values directly
const myToken = "8b43cfea13c50c96aa2120d7050d01ce1647189291f3a1266deb9fe6fe6da805";
const myRoom = "64209edc834771e7961016b9";

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
