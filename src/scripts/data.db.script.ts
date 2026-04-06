import { MonitorTank, MonitorTankLog } from "../configs/db.config";

(async () => {
    const monitorTank = await MonitorTank.find();
    if (!monitorTank) return;
    const mts = monitorTank.map(tank => ({
        mt_id: tank.mt_id,
        sensor_ids: tank.sensor_ids
    }));
    console.log(mts);

    const monitorTankLogs = await MonitorTankLog.find({ where: { mt_id: 0 } });
    if (!monitorTankLogs) return;

    console.log(monitorTankLogs);
})()
