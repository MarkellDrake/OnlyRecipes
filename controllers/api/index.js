const router = require('express').Router();
const recipeRoutes = require('./recipeRoutes');
const commentRoutes = require('./commentRoutes');
const ingredientRoutes = require('./ingredientRoutes');
const userRoutes = require('./userRoutes');

// router.use('/recipe', recipeRoutes);
// router.use('/comment', commentRoutes);
// router.use('/ingredients', ingredientRoutes);
router.use('/users', userRoutes);


module.exports = router;