const router = require('express').Router();
const { Favorite , User } = require('../../models');

router.get('/', (req, res) => {
    Favorite.findAll()
      .then(dbFavoriteData => res.json(dbFavoriteData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Favorite.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['favorite_post', 'user_id', 'post_id'],
        // include: [
        //     {
        //         model: User,
        //         attributes: ['username']
        //     }
        // ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.post('/', (req, res) => {
    if (req.session) {
        Favorite.create({
            comment_text: req.body.favorite_post,
            post_id: req.body.post_id,
            user_id: req.session.user_id
        })
        .then(dbFavoriteData => res.json(dbFavoriteData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

router.delete('/:id', (req, res) => {
    Favorite.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbFavoriteData => {
        if (!dbFavoriteData) {
            res.status(404).json({ message: 'No favorite found with this id!'});
            return;
        }
        res.json(dbFavoriteData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;