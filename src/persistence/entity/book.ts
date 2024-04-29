import { DataTypes, Model, Sequelize } from 'sequelize';
import DatabaseConfig from '../../config/database';
const sequelize = new DatabaseConfig().initDb();


export class Book extends Model {
    public id!: number;
    public title!: string;
    public isbn!: string;
    public authorId!: number;
    public readonly createdAt!: Date;
    public readonly createdBy!: string;
    public updatedAt!: Date;
    public updatedBy!: string;
}

Book.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    isbn: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    authorId: {
        type: new DataTypes.INTEGER,
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
        allowNull: false
    },
    updatedBy: {
        type: new DataTypes.STRING(128),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Book',
    tableName: 'books',
    timestamps: true
});