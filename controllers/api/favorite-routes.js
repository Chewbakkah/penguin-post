const router = require('express').Router();
const { Favorite , Post } = require('../../models');

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
        attributes: ['favorite_count', 'comment_text', 'user_id', 'post_id'],

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
            favorite_count: req.body.favorite_count,
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
          res.status(404).json({ message: 'You have not favorited this post' });
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