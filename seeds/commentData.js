const { Comment } =require('../models');

const commentsData = [
    {
        name: 'Fuego',
        comment:'That sounds fire yo cant wait to try it ',
        user_id: 1,
        recipe_id:1,
    },
    {
        name:'WOW',
        comment:'WOW!! Ive been waiting for this recipe',
        user_id: 2,
        recipe_id: 2,
    },
    {
        name:'dinner for the fam!',
        comment:'Lets go i found dinner for tonight!!',
        user_id:1,
        recipe_id:1,

    },
    {
        name:' THE BEST ',
        comment:'Just made it and the best the ever :)',
        user_id:2,
        recipe_id:2,
    }

];

const seedComments = () => Comment.bulkCreate(commentsData);

module.exports = seedComments;