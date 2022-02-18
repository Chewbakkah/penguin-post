const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
      attributes: [
        'id',
        'post_content',
        'likes',
        'created_at',
        'resquawk'
      ],
    //   include: [
    //     {
    //       model: Comment,
    //       attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //       include: {
    //         model: User,
    //         attributes: ['username']
    //       }
    //     },
    //     {
    //       model: User,
    //       attributes: ['username']
    //     }
    //   ]
    })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        if(req.session.loggedIn){
            res.render('dashboard', {
                posts,
                loggedIn: req.session.loggedIn
              });
        }else{
            res.render('login', {});
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  