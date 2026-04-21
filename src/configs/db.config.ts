// MODULES
import Db, { DataTypes } from '@harrypoggers25/db-postgresql';
import env from './env.config.js';

export const db = Db.config({
    user: env.DB_USER,
    host: env.DB_HOST,
    database: env.DB_NAME,
    password: env.DB_PASSWORD,
    port: env.DB_PORT
});

export const User = db.define('users', {
    user_id: { type: DataTypes.SERIAL, allowNull: false, primaryKey: true },
    user_name: { type: DataTypes.VARCHAR(255), allowNull: false },
    user_email: { type: DataTypes.VARCHAR(255), allowNull: false },
    user_phone: { type: DataTypes.VARCHAR(255), allowNull: true },
    user_role: { type: DataTypes.VARCHAR(255), allowNull: false },
    staff_id: { type: DataTypes.VARCHAR(255), allowNull: false },
    created_at: { type: DataTypes.TIMESTAMP, allowNull: true },
    updated_at: { type: DataTypes.TIMESTAMP, allowNull: true },
    created_by: { type: DataTypes.INTEGER, allowNull: true },
});

export const UserSecret = db.define('user_secrets', {
    user_password: { type: DataTypes.VARCHAR(255), allowNull: false },
    user_refresh_token: { type: DataTypes.TEXT, allowNull: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false, unique: true }
});
UserSecret.setForeignKey(User, 'user_id');

export const UserActivityLog = db.define('user_activity_logs', {
    ual_id: { type: DataTypes.SERIAL, allowNull: false, primaryKey: true },
    ual_activity: { type: DataTypes.VARCHAR(511), allowNull: false },
    ual_ip: { type: DataTypes.VARCHAR(255), allowNull: false },
    ual_date: { type: DataTypes.TIMESTAMP, allowNull: false },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
});
UserActivityLog.setForeignKey(User, 'user_id');

export const MonitorTank = db.define('monitor_tanks', {
    mt_id: { type: DataTypes.SERIAL, allowNull: false, primaryKey: true },
    mt_name: { type: DataTypes.VARCHAR(255), allowNull: false, unique: true },
    mt_height: { type: DataTypes.DOUBLE_PRECISION, allowNull: false },
    mt_diameter: { type: DataTypes.DOUBLE_PRECISION, allowNull: false },
    mt_topic: { type: DataTypes.TEXT, allowNull: true },
    sensor_ids: { type: DataTypes.TEXT, allowNull: false, },
    gateway_id: { type: DataTypes.VARCHAR(255), allowNull: false },
});

export const MonitorTankLog = db.define('monitor_tank_logs', {
    mtl_id: { type: DataTypes.SERIAL, allowNull: false, primaryKey: true },
    mtl_raw_data: { type: DataTypes.TEXT, allowNull: false },
    mtl_level: { type: DataTypes.VARCHAR(511), allowNull: false },
    mtl_temp: { type: DataTypes.VARCHAR(511), allowNull: false },
    mtl_humidity: { type: DataTypes.VARCHAR(511), allowNull: false },
    mtl_date: { type: DataTypes.TIMESTAMP, allowNull: false },
    mt_id: { type: DataTypes.INTEGER, allowNull: false },
});
MonitorTankLog.setForeignKey(MonitorTank, 'mt_id');
