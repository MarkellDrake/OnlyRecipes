const { Ingredient } = require('../models');

const ingredientData = [
    {
        name: 'Rice',
        measurement_type: 'Cup',
        ammount: 2,
        recipe_id: 1,
    },
    {
        name: 'Chicken Breast',
        measurement_type: 'ounces',
        ammount: 16,
        recipe_id: 1,
    },
    {
        name: 'Rice',
        measurement_type: 'cups',
        ammount: 3,
        recipe_id: 2,
    },
    {
        name: 'Milk',
        measurement_type:'cup',
        ammount: 4,
        recipe_id: 2,
    }
]

const seedIngredients = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredients;
