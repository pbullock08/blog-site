const router = require('express').Router();

// render homepage 
router.get('/', async (req, res) => {
    try {
        res.render('home')
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;