import { DataTypes, Model, Sequelize } from 'sequelize';
import DatabaseConfig from '../../config/database';
const sequelize = new DatabaseConfig().initDb();

export class Rating extends Model {
    public id!: number;
    public rating!: number;
    public bookId!: number;
    public readonly createdAt!: Date;
    public readonly createdBy!: string;
    public updatedAt!: Date;
    public updatedBy!: string;
}

Rating.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    rating: {
        type: new DataTypes.INTEGER,
        allowNull: false
    },
    bookId: {
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
    modelName: 'Rating',
    tableName: 'ratings',
    timestamps: true
});