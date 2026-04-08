import ch from "@harrypoggers25/color-utils";
import { User, UserSecret, UserActivityLog, MonitorTank, MonitorTankLog } from "../configs/db.config";

(async () => {
    const append = true;
    const path = './database/dataku-glide-v2.sql';

    const users = await User.backup(path, { orderBy: { user_id: 'ASC' } });
    if (!users) return;

    const userSecrets = await UserSecret.backup(path, { orderBy: { user_id: 'ASC' }, append });
    if (!userSecrets) return;

    const userActivityLogs = await UserActivityLog.backup(path, { orderBy: { ual_id: 'ASC' }, append });
    if (!userActivityLogs) return;

    const monitorTank = await MonitorTank.backup(path, { orderBy: { mt_id: 'ASC' }, append });
    if (!monitorTank) return;

    const monitorTankLog = await MonitorTankLog.backup(path, { orderBy: { mtl_id: 'ASC' }, append });
    if (!monitorTankLog) return;

    console.log(ch.green('SCRIPT:'), 'All db data has been', ch.green('successfully'), 'backed up');
})()
