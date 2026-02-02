const { Highrise } = require("highrise.bot");

const bot = new Highrise(
  ["ChatEvent", "UserJoinedEvent", "UserLeftEvent"],
  {
    LoggerOptions: {
      showTimestamp: true,
      showMethodName: true,
      colors: true
    },
    autoReconnect: true,
    reconnectDelay: 5000
  }
);

bot.on("ready", () => {
  console.log("Bot is online!");
});

bot.on("chatCreate", async (user, message) => {
  if (message.toLowerCase() === "hello") {
    await bot.message.send(`Hey ${user.username}! 👋`);
  }
});

bot.on("playerJoin", async (user) => {
  await bot.message.send(`Welcome ${user.username}! 🎉`);
});

// Use login method instead
bot.login(
  "8b43cfea13c50c96aa2120d7050d01ce1647189291f3a1266deb9fe6fe6da805",
  "64209edc834771e7961016b9"
);
