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

export const UserPassword = db.define('user_passwords', {
    user_password: { type: DataTypes.VARCHAR(255), allowNull: false },
    user_id: { type: DataTypes.INTEGER, allowNull: false, unique: true }
});
UserPassword.setForeignKey(User, 'user_id');

