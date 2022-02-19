const { Post } = require('../models');

const postData = [
    {
        id: 1,
        title: 'post1',
        post_content: 'this is Post1',
        user_id: 6
    },
    {
        id: 2,
        title: 'post2',
        post_content: 'this is Post2',
        user_id: 5
    },
    {
        id: 3,
        title: 'post3',
        post_content: 'this is Post3',
        user_id: 4
    },
    {
        id: 4,
        title: 'post4',
        post_content: 'this is Post4',
        user_id: 3
    },
    {
        id: 5,
        title: 'post5',
        post_content: 'this is Post5',
        user_id: 2
    },
    {
        id: 6,
        title: 'post6',
        post_content: 'this is Post6',
        user_id: 1
    }
  ];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;