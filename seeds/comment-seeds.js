const { Comment } = require("../models");

const commentData = [
    {
        "content": "I just learned about this in my class!",
        "date_created": "06-06-2023",
        "user_id": 2,
        "post_id": 1
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;