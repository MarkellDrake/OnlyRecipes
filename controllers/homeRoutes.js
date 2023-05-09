const router = require('express').Router();
const { Comment, User, Recipe, Ingredient } = require('../models');
const withAuth = require('../utils/auth');

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
                    attributes: ['id'],
                },
            ]
        });

        const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

        res.render('homepage', {
            recipes,
            logged_in: req.session.logged_in
        });
    } catch (err) {
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
                    attributes: ['id', 'name', 'comment'],
                },
            ]
        });

        const recipe = recipeData.get({ plain: true });

        res.render('recipe', {
            recipe,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/profile/', withAuth, async (req, res) => {
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
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/add-recipe', withAuth, (req, res) => {
    res.render('add-recipe')
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
});

module.exports = router;