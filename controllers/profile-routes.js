const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:id', withAuth, (req, res) => {
    console.log('profile id called');
    User.findOne({
        where: {
            id: req.params.id
          },
      attributes: [
          'id',
        'username',
        'icon',
        'hero'
      ],
      include: [
        {
          model: Post,
          attributes: ['id', 'post_content', 'user_id', 'created_at'],
          order: sequelize.literal('created_at DESC'),
          limit: 25,
        }
      ]
      
    })

      .then(dbPostData => {
            // console.log(dbPostData);
          const userInfo = dbPostData.dataValues;
          const posts = dbPostData.dataValues.posts.map(post => post.get({ plain: true }));
          console.log(userInfo);
          console.log(posts);
          res.render('profile', { userInfo, posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  

module.exports = router;