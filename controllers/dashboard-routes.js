const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Favorite } = require('../models');
const withAuth = require('../utils/auth');

let getFriends = () => {
  console.log('getfriends called');
  router.get('/', (req, res) => {
    User.findOne({
      attributes: { exclude: ['password'] },
      where: {
        id: req.session.user_id
      }
    })
      .then(dbUserData => {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!');
        // console.log(dbUserData);
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
}


// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
  Post.findAll({
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
          'icon'
        ]
      }
    ],
    order: sequelize.literal('created_at DESC'),
    limit: 25,
  })
  // User.findOne({
  //   attributes: { exclude: ['password'] },
  //   where: {
  //     id: req.session.user_id
  //   }
  // })
    .then(dbPostData => {
      console.log(dbPostData);
      
      const posts = dbPostData.map(post => post.get({ plain: true }));
      // console.log(posts);
      res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Post.findByPk(req.params.id, {
    attributes: [
      'id',
      'post_content',
      'created_at',
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });
        
        res.render('edit-post', {
          post,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});


module.exports = router;
