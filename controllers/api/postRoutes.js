const router = require('express').Router();
const { Post, User } = require('../../models');

// /api/posts endpoint 

// GET Posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: { 
        model: User,
        attributes: ['username'],
      },
    });
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