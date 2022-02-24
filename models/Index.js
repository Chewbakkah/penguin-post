const Post = require('./Post');
const User = require('./User');
const Repost = require('./Repost');
const Favorite = require('./Favorite');
const Fact = require('./Fact');
// forcing change
User.hasMany(Post, {
    foreignKey: 'user_id'
  });  

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

User.belongsToMany(Post, {
    through: Favorite,
    as: 'favorited_post',
    foreignKey: 'user_id'
});

User.belongsToMany(Post, {
    through: Repost,
    as: 'resquawked_post',
    foreignKey: 'user_id'
});

Post.hasMany(Repost, {
    foreignKey: 'post_id'
});

Post.hasMany(Favorite, {
    foreignKey: 'post_id'
});

module.exports = { Post, User, Repost, Favorite, Fact };