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
        // console.log(err);
    }
});

// render login page
router.get('/login', async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
});

// render sign up page
router.get('/signup', async (req, res) => {
    try {
        res.render('signup');
    } catch (err) {
        res.status(500).json(err);
    }
});

// render dashboard
router.get('/dashboard', async (req, res) => {
    try {
        res.render('dashboard');
    } catch (err) {
        res.status(500).json(err);
    }
});

// render form to create new post
router.get('/create', async (req, res) => {
    try {
        res.render('create-post');
    } catch (err) {
        res.status(500).json(err);
    }
});

// render form to edit post
router.get('/edit', async (req, res) => {
    try {
        res.render('edit-post');
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;