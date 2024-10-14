import TelegramBot from "node-telegram-bot-api";
import { Env } from "#/env/config.js";
import { owmService } from "#/services/owm.js";
import { default as ch } from "chalk";
const bot = new TelegramBot(Env.tg_bot_token, { polling: true });

bot.onText(/\/start/, (msg) => {
	bot.sendMessage(msg.chat.id, "Введите название города, чтобы узнать текущую погоду.");
});

bot.on("message", async (msg) => {
	const city = msg.text?.trim();
	if (city && !city.startsWith("/")) {
		const weatherInfo = await owmService.getWeather(city);
		bot.sendMessage(msg.chat.id, weatherInfo);
	}
});

console.log(ch.bgBlack.green("Телеграм бот успешно запущен"));
