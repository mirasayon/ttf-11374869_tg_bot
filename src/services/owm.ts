import { Env } from "#/env/config.js";
import type { owmResponse } from "#/types/owm.js";
import axios from "axios";
const owm_api = "https://api.openweathermap.org";
class OWMService {
	getWeather = async (city: string): Promise<string> => {
		try {
			const response = await axios.get<owmResponse>(`${owm_api}/data/2.5/weather?q=${city}&appid=${Env.owm_api_key}&units=metric&lang=ru`);
			const { temp, humidity } = response.data.main;
			const { name } = response.data;
			const { description } = response.data.weather[0];
			return `Погода в городе ${name}:\nТемпература: ${temp}°C\nВлажность: ${humidity}%\nОписание: ${description}`;
		} catch (error) {
			return "Не удалось получить данные о погоде. Проверьте название города.";
		}
	};
}
export const owmService = new OWMService();
