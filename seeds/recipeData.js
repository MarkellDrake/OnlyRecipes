const { Recipe } = require('../models');

const recipeData = [
    {
        name: 'Arroz con Pollo',
        instructions: 'Cook rice, add cooked chicken. Serve.',
        user_id: 1,
    },
    {
        name: 'Arroz con Leche',
        instructions: 'Cook rice, add cream and sugar. Serve.',
        user_id: 2,
    }
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;