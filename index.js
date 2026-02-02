const { Highrise } = require("highrise.bot");

const bot = new Highrise(
  ["ChatEvent"],
  {
    autoReconnect: true,
    reconnectDelay: 5000
  }
);

bot.on("ready", () => {
  console.log("Bot is ready and in the room!");
});

bot.login(
  "8b43cfea13c50c96aa2120d7050d01ce1647189291f3a1266deb9fe6fe6da805",
  "64209edc834771e7961016b9"
);
