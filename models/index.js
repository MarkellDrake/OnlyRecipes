const Recipe = require('./Recipe');
const Ingredient = require('./Ingredient');
const User = require('./User');
const Comment = require('./Comment');

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Recipe.hasMany(Comment, {
    foreignKey: 'recipe_id',
});

Comment.belongsTo(Recipe, {
    foreignKey: 'recipe_id',
});

User.hasMany(Recipe, {
    foreignKey: 'user_id',
});

Recipe.belongsTo(User, {
    foreignKey: 'user_id',
});

Recipe.hasMany(Ingredient, {
    foreignKey: 'recipe_id',
});

Ingredient.belongsTo(Recipe, {
    foreignKey: 'recipe_id',
});

module.exports = { Recipe, Ingredient, User, Comment };