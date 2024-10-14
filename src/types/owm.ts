export interface owmResponse {
	coord: {
		lon: number;
		lat: number;
	};
	weather: {
		id: number;
		main: string; //"Clouds";
		description: string; //"небольшая облачность";
		icon: string; //"02d";
	}[];

	base: string; // "stations";
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
		sea_level: number;
		grnd_level: number;
	};
	visibility: number;
	wind: {
		speed: number;
		deg: number;
	};
	clouds: {
		all: number;
	};
	dt: number;
	sys: {
		type: number;
		id: number;
		country: string; //"UZ";
		sunrise: number;
		sunset: number;
	};
	timezone: number;
	id: number;
	name: string; // "Ташкент";
	cod: number;
}
