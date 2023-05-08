const router = require('express').Router();
const { Recipe, Ingredient } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/add-recipe', withAuth, async (req, res) => {
    console.log(req.body);
    try {
        const { name, instructions, ingredients } = req.body;
        var recipeName = name;
        var recipeInstructions = instructions;

        const recipeData = {
            name: recipeName,
            instructions: recipeInstructions,
            user_id: req.session.user_id
        };

        const recipe = await Recipe.create(recipeData);

        const createdRecipe = await Recipe.findOne({
            where: {
                name: recipeData.name,
                user_id: recipeData.user_id
            }
        });

        const recipeId = createdRecipe.id;

        const ingredientsWithRecipeId = ingredients.map((ingredient) => ({
             ...ingredient, 
             recipe_id: recipeId
            })
        );

        const createdIngredients = await Ingredient.bulkCreate(ingredientsWithRecipeId);

        res.status(200).json({ recipe, createdIngredients });
    } catch (err){
        res.status(400).json(err)
    }
});

module.exports = router;