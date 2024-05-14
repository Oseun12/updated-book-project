import { DataTypes, Model, Sequelize } from "sequelize";
import DatabaseConfig from "../../config/database";


const sequelize = new DatabaseConfig().initDb();

export class User2 extends Model {
    public id!: number;
    public name!: string;
    public username!: string;
    public email!: string;
    public address!: string;
    public street!: string;
    public suite!: string;
    public city!: string;
    public zipcode!: string;
    public geo!: string;
    public lat!: string;
    public log!: string;
    public phone!: string;
    public website!: string;
    public company!: string;
    //public name!: string;
    public catchPhrase!: string;
    public bs!: string;

}

User2.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    username: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    email: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    address: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    street: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    suite: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    city: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    zipcode: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },

    lat: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    log: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    phone: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    website: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    company: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    catchPhrase: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    bs: {
        type: new DataTypes.STRING(128),
        allowNull: false
    }
    },  {
    sequelize,
    modelName: 'User2',
    tableName: 'user2',

});



export class Post extends Model {
    public id!: number;
    public title!: string;
    public body!: string;
    public userId!: number;
}


Post.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}, {
    sequelize,
    modelName: 'Post',
    tableName: 'post'
});
/** 
  export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }
 * **/ 