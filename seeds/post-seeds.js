const { Post } = require("../models");

const postData = [
    {
        "title": "Why MVC is so important",
        "content": "MVC  allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
        "date_created": "06-05-2023",
        "user_id": 1
    },
    {
        "title": "Authentication Vs. Authorization",
        "content": "There is a difference between authentication and authrorization. Authentication means confirming your own identity, whereas authorization means being allowed acces to the system.",
        "date_created": "06-07-2023",
        "user_id": 1
    },
    {
        "title": "Object Relational Mapping",
        "content": "I have really loved learning about ORMs. It is really simplified the way I create queries in SQL.",
        "date_created": "06-10-2023",
        "user_id": 3
    },
    
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;