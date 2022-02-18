const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models/');

// Retrieving all post for homepage
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            
        ]
    })
})
