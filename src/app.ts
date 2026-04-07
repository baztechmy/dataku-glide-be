// MODULES
import App from "@harrypoggers25/app-express";

// CONFIGS
import env from "./configs/env.config";
import router from "./routers";
import { db } from "./configs/db.config";

App.listen({
    port: env.PORT,
    version: '1.0.0 build 2',
    cors: [env.ORIGIN_URL],
    beforeListen: async (app) => {
        app.use('/', router);
    },
    callback: async (app, server) => {
        await db.sync({ alter: false });
    }
});
