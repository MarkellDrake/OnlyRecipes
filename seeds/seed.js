const seedComments = require('./commentData');
const seedIngredients = require('./ingredientData');
const seedRecipes = require('./recipeData');
const seedUsers = require('./userData');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('Database Synced!');
  
  await seedUsers();
  console.log('Users Seeded!');

  await seedRecipes();
  console.log('Recipes Seeded!');
  
  await seedComments();
  console.log('Comments Seeded!');

  await seedIngredients();
  console.log('Ingredients Seeded!');

  process.exit(0);
};

seedAll();