// MODULES
import Env from "@harrypoggers25/env";

const env = Env.define({
    ORIGIN_URL: { type: 'string' },
    PORT: { type: 'number' },
    TOKEN_SECRET: { type: 'string' },
    BCRYPT_SALT: { type: 'number', default: 10 },
    DB_HOST: { type: 'string', default: 'localhost' },
    DB_USER: { type: 'string' },
    DB_PASSWORD: { type: 'string' },
    DB_NAME: { type: 'string' },
    DB_PORT: { type: 'number', default: 5432 },
    MQTT_HOST: { type: 'string', },
    MQTT_PORT: { type: 'number', default: 1883 },
    MQTT_USER: { type: 'string' },
    MQTT_PASSWORD: { type: 'string' },
}, { init: true });

export default env;
