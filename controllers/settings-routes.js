const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    User.findOne({
      where: {
        id: req.session.user_id
      },
      attributes: [
        'id',
        'username',
        'icon',
        'hero'
      ]
    })
      .then(dbUserData => {

        const user = dbUserData.dataValues;
        console.log(user);
        res.render('settings', { user, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;