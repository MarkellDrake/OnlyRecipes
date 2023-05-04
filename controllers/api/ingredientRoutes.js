const router = require('express').Router();
const { Ingredient } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const ingredientData = await Ingredient.create(req.body);
        res.status(200).json(ingredientData);
    } catch (err) {
        res.status(400).json(err)
    }
});

module.exports = router;