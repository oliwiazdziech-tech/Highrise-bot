const { Highrise } = require("highrise.bot");

const bot = new Highrise(
  ["ChatEvent", "UserJoinedEvent", "UserLeftEvent", "EmoteEvent", "TipEvent"],
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

// Log ALL events
bot.on("ready", (session) => {
  console.log("Bot is ready!");
  console.log("Session:", JSON.stringify(session));
});

bot.on("chatCreate", async (user, message) => {
  console.log("chatCreate:", user, message);
});

bot.on("chat", async (user, message) => {
  console.log("chat:", user, message);
});

bot.on("ChatEvent", async (user, message) => {
  console.log("ChatEvent:", user, message);
});

bot.on("message", async (user, message) => {
  console.log("message:", user, message);
});

bot.on("playerJoin", async (user) => {
  console.log("playerJoin:", user);
});

bot.on("userJoin", async (user) => {
  console.log("userJoin:", user);
});

// Catch any event
bot.onAny = (event, data) => {
  console.log("ANY EVENT:", event, data);
};

console.log("Starting bot...");

bot.login(
  "8b43cfea13c50c96aa2120d7050d01ce1647189291f3a1266deb9fe6fe6da805",
  "64209edc834771e7961016b9"
);

console.log("Login called");
