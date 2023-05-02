const { User } = require('../models');

const userData = [
    {
        name: 'George Smith',
        email: 'georgesmith@mail.com',
        password: 'project2',
    },
    {
        name: 'Abby Johnson',
        email: 'abbyjohnson@mail.com',
        password: 'project2',
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;