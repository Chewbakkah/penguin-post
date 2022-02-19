const { Repost } = require('../models');

const repostData = [
    {
        id: 1,
        user_id: 1,
        post_id: 3
    },
    {
        id: 2,
        user_id: 2,
        post_id: 4
    },
    {
        id: 3,
        user_id: 2,
        post_id: 5
    }
  ];

const seedRepost = () => Repost.bulkCreate(repostData);

module.exports = seedRepost;