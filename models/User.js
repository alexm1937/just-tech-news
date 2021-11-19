
const { Model, DataTypes } = require('sequelize');
const sequalize = require('../config/connection');

//create our User model
class User extends Model {}

//define table columns & config
User.init(
    {
        //table column definitions gp here
        id: {
            //sequalize Datatypes object
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // cant have dupl email values in this table(!)
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // means password must be at least 4 characters long
                len: [4]
            }
        }
    },
    {
        //table config options here
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;
