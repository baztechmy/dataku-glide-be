import router from "./routers";

// MODULES
import App from "@harrypoggers25/app-express";
import ch from "@harrypoggers25/color-utils";
import cookieParser from 'cookie-parser';

// CONFIGS
import env from "./configs/env.config";
import { db, MonitorTank, MonitorTankLog } from "./configs/db.config";
import { mqttClient } from "./configs/mqtt.config"

App.listen({
    port: env.PORT,
    version: '1.0.2',
    cors: [env.ORIGIN_URL],
    beforeListen: async (app) => {
        app.use(cookieParser());
        app.use('/', router);
    },
    callback: async (app, server) => {
        await db.sync({ alter: false });

        const monitorTanks = await MonitorTank.find({ orderBy: { mt_id: 'ASC' } });
        if (!monitorTanks) {
            console.log(ch.red('INIT ERROR:'), `Failed to retrieve all monitor tank data`);
            return;
        }

        for (const mt of monitorTanks) {
            const { mt_id, mt_name, mt_topic } = mt;
            if (!mt_topic) continue;
            mqttClient.subscribe(mt_topic, async (mtl_raw_data) => {
                try {
                    const mtl_date = new Date();
                    const raw_data = JSON.parse(mtl_raw_data);
                    const mtl_level = raw_data.distance ?? 'N/A';
                    const mtl_temp = raw_data.temperature ?? 'N/A';
                    const mtl_humidity = raw_data.humidity ?? 'N/A';
                    const monitorTankLog = await MonitorTankLog.create({ mtl_raw_data, mtl_level, mtl_temp, mtl_humidity, mtl_date, mt_id });
                    if (!monitorTankLog) throw new Error('Failed to insert raw data to database');
                } catch (error: any) {
                    console.log(ch.red(`RAW DATA PARSE ERROR [glide/A84041FDFE27EB10/${mt_name}]`), error.message ?? error);
                }
            });
        }
    }
});
