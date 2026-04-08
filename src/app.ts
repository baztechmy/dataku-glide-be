import router from "./routers";

// MODULES
import App from "@harrypoggers25/app-express";
import cookieParser from 'cookie-parser';

// CONFIGS
import env from "./configs/env.config";
import { db } from "./configs/db.config";

App.listen({
    port: env.PORT,
    version: '1.0.0 build 4',
    cors: [env.ORIGIN_URL],
    beforeListen: async (app) => {
        app.use(cookieParser());
        app.use('/', router);
    },
    callback: async (app, server) => {
        await db.sync({ alter: false });
    }
});
