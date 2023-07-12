const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

// /api/post endpoint 

// GET posts by id to render individual blog post page
router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['username'],
            }
          ],
        },
      ]
    });
    // const post = postData.get({ plain: true });
    // res.render('blogpost', { post });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// router.post('/', async (req, res) => {
//     try {
//     //   const newProject = await Project.create({
//     //     ...req.body,
//     //     user_id: req.session.user_id,
//     //   });

//     //   res.status(200).json(newProject);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });

// router.delete('/:id', async (req, res) => {
//   try {
//   //   const projectData = await Project.destroy({
//   //     where: {
//   //       id: req.params.id,
//   //       user_id: req.session.user_id,
//   //     },
//   //   });

//   //   if (!projectData) {
//   //     res.status(404).json({ message: 'No project found with this id!' });
//   //     return;
//   //   }

//   //   res.status(200).json(projectData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;