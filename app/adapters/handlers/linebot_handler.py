import os

from dotenv import load_dotenv, find_dotenv
from linebot import LineBotApi, WebhookHandler
from linebot.models import MessageEvent, TextMessage, TextSendMessage
from linebot.models.events import FollowEvent

from app.utils.event_log import save_user_to_log

# dotenv_path = '/config/development/.env'
# if not os.path.exists(dotenv_path):
#     dotenv_path = '/config/production/.env'
# _ = load_dotenv(dotenv_path)

_ = load_dotenv(find_dotenv())
line_bot_api = LineBotApi(os.environ['CHANNEL_ACCESS_TOKEN'])
handler = WebhookHandler(os.environ['CHANNEL_SECRET'])

@handler.add(MessageEvent, message=TextMessage)
def handle_message(event: MessageEvent):
    try:
        line_bot_api.reply_message(
            event.reply_token,
            TextSendMessage(text=event.message.text)
        )
    except Exception as e:
        print(e)

@handler.add(FollowEvent)
def reply_text_and_get_user_profile(event: FollowEvent):

    # Get User Profile
    user_profile = line_bot_api.get_profile(event.source.user_id)

    save_user_to_log(user_profile)
