import { DataTypes, Model } from 'sequelize';
import DatabaseConfig from '../../config/database';
import { AppRole } from '../../model/enums/app.role';
const sequelize = new DatabaseConfig().initDb();

export class User extends Model {
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public username!: string;
    public password!: string;
    public role!: AppRole;
    public readonly createdAt!: Date;
    public readonly createdby!: string;
    public updatedAt!: Date;
    public updatedBy!: string;

}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    lastName: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    email: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    username: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    password: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('EDITOR', 'AUTHOR', 'REVIEWER', 'PUBLISHER'),
        allowNull: false
    },
    createdAt: {
        type: new DataTypes.DATE,
        allowNull: false
    },
    createdBy: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    updatedAt: {
        type: new DataTypes.DATE,
        allowNull: true
    },
    updatedBy: {
        type: new DataTypes.STRING(128),
        allowNull: true
    }
}, {
    tableName: 'users',
    sequelize: sequelize,
    modelName: 'User',
    timestamps: true,
});