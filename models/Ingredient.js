const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredient extends Model {}

Ingredient.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        measurement_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amount: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: 1,
        },
        recipe_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'recipe',
                key: 'id',
            },
        },
    },

{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ingredient',
}
);

module.exports = Ingredient;
