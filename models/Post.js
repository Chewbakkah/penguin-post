const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {
  static favorite(body, models) {
    return models.Favorite.create({
      user_id: body.user_id,
      post_id: body.post_id
    })
    .then(() => {
      return Post.findOne({
        where: {
          id: body.post_id
        },
        attributes: [
          'id',
          // 'post_id',
          [
            sequelize.literal('(SELECT COUNT(*) FROM favorite WHERE post.id = favorite.post_id)'),
            'favorite_count'
          ]
        ]
      });
    });
  }
}

    Post.init(
        {
          id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          post_content: {
            type: DataTypes.STRING(281),
            allowNull: false,
            validate: {
              len: [2]
            }
          },
          user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
          }
        },
        {
          sequelize,
          freezeTableName: true,
          underscored: true,
          modelName: 'post'
        }
      );

module.exports = Post;

