from telebot import TeleBot
from telebot.types import Message, ReplyKeyboardMarkup, KeyboardButton, WebAppInfo

token = "7104348895:AAGaqYn19fcD94yi3iyN6DCHfC6irsf592E"


def keyboard():
    markup = ReplyKeyboardMarkup(resize_keyboard=True)
    web_info = WebAppInfo(url="https://savva9.github.io/TimeTable/")
    button = KeyboardButton(text="запусти приложение", web_app=web_info)
    markup.add(button)
    return markup


bot = TeleBot(token, "HTML")


@bot.message_handler(commands=["start"])
def start(message: Message):
    bot.send_message(
        chat_id=message.chat.id,
        text="hello world",
        reply_markup=keyboard()
    )


bot.infinity_polling()
