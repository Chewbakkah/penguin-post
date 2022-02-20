const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

async function getUserPosts(id) {
    console.log('getUserPosts called');
    //getting stuck here!!!!!!!!!!!!!
    router.get('/', (req, res) => {
        console.log('router passed');
        console.log(id);
      Post.findAll({
        where: {
          id: user_id
        },
        attributes: ['id', 'post_content', 'created_at'],
        order: [['created_at', 'DESC']], 
        include: [
          {
            model: User,
            attributes: ['username']
          }
        ]
      })
          .then(dbPostData => res.json(dbPostData))
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
      });
    }
    

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
    //   include: [
    //     {
    //       model: Post,
    //       attributes: ['id', 'post_content', 'created_at']
    //     },
    //   ]
    })
      .then(dbUserData => {
        //   console.log(dbUserData.dataValues.id);
          getUserPosts(dbUserData.dataValues.id);
      })
      .then(dbPostData => {
            // console.log(dbPostData);
          const userInfo = dbPostData;
        //   console.log(userInfo);
          res.render('profile', { userInfo, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  

module.exports = router;