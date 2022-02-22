const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// router.get('/:id', withAuth, (req, res) => {
//     console.log('profile id called');
//     User.findOne({
//         where: {
//             id: req.params.id
//           },
//       attributes: [
//           'id',
//         'username',
//         'icon',
//         'hero'
//       ],
//       include: [
//         {
//           model: Post,
//           attributes: ['id', 'post_content', 'user_id', 'created_at'],
//           order: sequelize.literal('created_at DESC'),
//           limit: 25,
//         }
//       ]
      
//     })

//       .then(dbPostData => {
//             // console.log(dbPostData);
//           const user = dbPostData.dataValues;
//           const posts = dbPostData.dataValues.posts.map(post => post.get({ plain: true }));
//           console.log(user);
//           console.log(posts);
//           res.render('profile', { user, posts, loggedIn: true });
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

router.get('/:id', withAuth, (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'post_content',
      'created_at'
    ],
    include: [
      {
        model: User,
        attributes: [
          'username',
          'id',
          'icon',
          'hero'
        ]
      }
    ],
    order: sequelize.literal('created_at DESC'),
    limit: 25,
  })
    .then(dbPostData => {
      // console.log(dbPostData[0].dataValues.user.dataValues);
      const posts = dbPostData.map(post => post.get({ plain: true }));
      const user = dbPostData[0].dataValues.user.dataValues;
      console.log(user);
      res.render('profile', { posts, user, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
  

module.exports = router;