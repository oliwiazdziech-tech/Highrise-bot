from highrise import BaseBot, User
from highrise.__main__ import *
import os

class MyBot(BaseBot):
    async def on_start(self):
        print("Bot is online!")

    async def on_chat(self, user: User, message: str):
        if message.lower() == "hello":
            await self.highrise.chat(f"Hey {user.username}! 👋")

    async def on_user_join(self, user: User):
        await self.highrise.chat(f"Welcome {user.username}! 🎉")

token = os.environ["BOT_TOKEN"]
room_id = os.environ["ROOM_ID"]

import sys
sys.argv = ["main.py", token, room_id, "MyBot", "main"]

from highrise.__main__ import main
import asyncio
asyncio.get_event_loop().run_until_complete(main(sys.argv))
