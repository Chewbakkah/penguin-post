const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    console.log('======================');
    User.findOne({
      where: {
        id: req.session.user_id
      },
      attributes: [
        'username',
        'icon',
        'hero'
      ]
    })
      .then(dbUserData => {
          console.log('you got this far');
          console.log(dbUserData);
        const userInfo = dbUserData.attributes;
        res.render('settings', { userInfo, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;