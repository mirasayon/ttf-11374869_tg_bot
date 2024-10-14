import { env } from "node:process";
class EnvClass {
	constructor(env_varbs: string[]) {
		for (const varb of env_varbs) {
			const exists = Object.hasOwn(env, varb);
			if (!exists) {
				throw new Error(`${varb} is required in env file`);
			}
		}
	}
	private nodenv = env.NODE_ENV as string;
	mode = {
		dev: this.nodenv === "development",
		test: this.nodenv === "test",
		prod: this.nodenv === "production",
	};

	owm_api_key = env.OWM_API_KEY as string;
	tg_bot_token = env.TG_BOT_TOKEN as string;
}
export const Env = new EnvClass(["NODE_ENV", "TG_BOT_TOKEN", "OWM_API_KEY"]);
