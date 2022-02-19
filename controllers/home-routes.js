const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'post_url',
            'user_id',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then((dbPostData) => {
        res.json(dbPostData)
    })
    // .then(dbPostData => {
    //     const posts = dbPostData.map(post => post.get({ plain: true }));
    //     res.render('login', {
    //         posts, 
    //         loggedIn: req.session.loggedIn
    //     });
    // })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Creating route to GET single post
// Question on line 80
router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'post_url',
            'title',
            'user_id',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User, 
                    attributes: ['username']
                }
            }, 
            {
                model: User, 
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            // send user to Court's 404 page
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        const post = dbPostData.get({ plain: true });
        res.render('post-info', {
            post,
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
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;