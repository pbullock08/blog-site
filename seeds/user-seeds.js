const { User } = require("../models");

const userData = [
    {
        "username": "joeschmoe01",
        "password": "testing123"
    },
    {
        "username": "lolas18",
        "password": "testing123"
    },
    {
        "username": "pnblenik",
        "password": "testing123"
    },
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;