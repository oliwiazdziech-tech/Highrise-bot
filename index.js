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

bot.on("ready", async () => {
  console.log("Bot is ready!");
  // Send a message when bot connects
  try {
    await bot.message.send("Hello! I am online! 🤖");
    console.log("Welcome message sent!");
  } catch (err) {
    console.log("Error sending message:", err);
  }
});

bot.on("chatCreate", async (user, message) => {
  console.log("chatCreate:", user, message);
  if (message.toLowerCase() === "hello") {
    await bot.message.send(`Hey ${user.username}! 👋`);
  }
});

bot.on("chat", async (user, message) => {
  console.log("chat:", user, message);
  if (message.toLowerCase() === "hello") {
    await bot.message.send(`Hey ${user.username}! 👋`);
  }
});

bot.on("whisper", async (user, message) => {
  console.log("whisper:", user, message);
});

bot.on("playerJoin", async (user) => {
  console.log("playerJoin:", user);
  await bot.message.send(`Welcome ${user.username}! 🎉`);
});

bot.login(
  "8b43cfea13c50c96aa2120d7050d01ce1647189291f3a1266deb9fe6fe6da805",
  "64209edc834771e7961016b9"
);bot.on("playerJoin", async (user) => {
  console.log("playerJoin event fired!", user);
  await bot.message.send(`Welcome ${user.username}! 🎉`);
});

console.log("Starting bot...");

bot.login(
  "8b43cfea13c50c96aa2120d7050d01ce1647189291f3a1266deb9fe6fe6da805",
  "64209edc834771e7961016b9"
);
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
