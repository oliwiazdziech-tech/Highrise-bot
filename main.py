import asyncio
import os
from highrise import BaseBot, User
from highrise.webapi import WebAPI
from highrise.models import SessionMetadata

class MyBot(BaseBot):
    async def on_start(self, session_metadata: SessionMetadata) -> None:
        print("Bot is online!")

    async def on_chat(self, user: User, message: str) -> None:
        if message.lower() == "hello":
            await self.highrise.chat(f"Hey {user.username}! 👋")

    async def on_user_join(self, user: User, position) -> None:
        await self.highrise.chat(f"Welcome {user.username}! 🎉")

async def main():
    token = os.environ["BOT_TOKEN"]
    room_id = os.environ["ROOM_ID"]
    
    from highrise import Highrise
    my_bot = MyBot()
    await Highrise().run(token, room_id, my_bot)

if __name__ == "__main__":
    asyncio.run(main())
