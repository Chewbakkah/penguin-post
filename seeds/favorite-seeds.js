const { Favorite } = require('../models');

const favoriteData = [
    {
        id: 6,
        user_id: 1,
        post_id: 3
    },
    {
        id: 5,
        user_id: 2,
        post_id: 4
    },
    {
        id: 4,
        user_id: 2,
        post_id: 5
    }
  ];

const seedFavorite = () => Favorite.bulkCreate(favoriteData);

module.exports = seedFavorite;