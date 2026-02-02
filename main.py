from highrise import BaseBot, User
import os
import asyncio

class MyBot(BaseBot):
    async def on_start(self):
        print("Bot is online!")

    async def on_chat(self, user: User, message: str):
        if message.lower() == "hello":
            await self.highrise.chat(f"Hey {user.username}! 👋")

    async def on_user_join(self, user: User):
        await self.highrise.chat(f"Welcome {user.username}! 🎉")

if __name__ == "__main__":
    token = os.environ["BOT_TOKEN"]
    room_id = os.environ["ROOM_ID"]
    
    from highrise.__main__ import main
    main(["", token, room_id, "MyBot", "main"])
