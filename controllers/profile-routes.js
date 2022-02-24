const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  Post.findAll({

    where: {
      user_id: req.params.id
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

      const posts = dbPostData.map(post => post.get({ plain: true }));
      const user = dbPostData[0].dataValues.user.dataValues;

      res.render('profile', { posts, user, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;