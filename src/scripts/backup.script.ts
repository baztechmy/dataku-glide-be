import ch from "@harrypoggers25/color-utils";
import { User, UserSecret, UserActivityLog, MonitorTank, MonitorTankLog } from "../configs/db.config";

(async () => {
    const append = true;
    const path = './database/dataku-glide-v3.sql';

    const users = await User.backup(path, { fixSequence: 'user_id', orderBy: { user_id: 'ASC' } });
    if (!users) return;

    const userSecrets = await UserSecret.backup(path, { orderBy: { user_id: 'ASC' }, append });
    if (!userSecrets) return;

    const userActivityLogs = await UserActivityLog.backup(path, { fixSequence: 'ual_id', orderBy: { ual_id: 'ASC' }, append });
    if (!userActivityLogs) return;

    const monitorTank = await MonitorTank.backup(path, { fixSequence: 'mt_id', orderBy: { mt_id: 'ASC' }, append });
    if (!monitorTank) return;

    const monitorTankLog = await MonitorTankLog.backup(path, { fixSequence: 'mtl_id', orderBy: { mtl_id: 'ASC' }, append });
    if (!monitorTankLog) return;

    console.log(ch.green('SCRIPT:'), 'All db data has been', ch.green('successfully'), 'backed up');
})()
