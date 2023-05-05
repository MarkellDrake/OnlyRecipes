const router = require('express').Router();
const { Comment, User, Recipe, Ingredient } = require('../models');

router.get('/', async (req, res) => {
    try {
        const recipeData = await Recipe.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Ingredient,
                    attributes: ['name'],
                },
                {
                    model: Comment,
                },
            ]
        });

        const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

        res.render('homepage', {
            recipes
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/recipe/:id', async (req, res) => {
    try {
        const recipeData = await Recipe.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Ingredient,
                    attributes: ['name', 'measurement_type', 'amount'],
                },
                {
                    model: Comment,
                    include: ['id', 'name', 'comment'],
                },
            ]
        });

        const recipe = recipeData.get({ plain: true });

        res.render('recipe', {
            recipe
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/profile', async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [
                {
                    model: Recipe
                },
                {
                    model: Comment
                }
            ]
        });

        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
});

module.exports = router;