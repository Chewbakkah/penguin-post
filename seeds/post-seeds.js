const { Post } = require('../models');

const postData = [
    {
        id: 1,
        post_content: 'this is Post1',
        user_id: 6
    },
    {
        id: 2,
        post_content: 'this is Post2',
        user_id: 5
    },
    {
        id: 3,
        post_content: 'this is Post3',
        user_id: 4
    },
    {
        id: 4,
        post_content: 'this is Post4',
        user_id: 3
    },
    {
        id: 5,
        post_content: 'this is Post5',
        user_id: 2
    },
    {
        id: 6,
        post_content: 'this is Post6',
        user_id: 1
    }
  ];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;