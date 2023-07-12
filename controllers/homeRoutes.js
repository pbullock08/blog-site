const router = require('express').Router();
const { Post, User } = require('../models');

// render homepage with existing blog posts 
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: {
                model: User,
                attributes: ['username'],
            },
        });
        const posts = postData.map((post) =>
            post.get({ plain: true })
        );
        res.render('homepage', {
            posts,
        });
        // res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
})

module.exports = router;