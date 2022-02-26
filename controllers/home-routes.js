const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User} = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
    Post.findAll({
      attributes: [
        'id',
        'post_content',
        [sequelize.literal('(SELECT COUNT(*) FROM favorite WHERE post.id = favorite.post_id)'), 'favorite_count']
      ],
      include: [
        {
          model: User,
          attributes: ['username', 'icon']
        }
        ],
    order: sequelize.literal('created_at DESC'),
    limit: 25,
  })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
  
        res.render('homepage', {
          posts,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
  });

module.exports = router;