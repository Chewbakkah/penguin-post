const router = require('express').Router();

// const apiRoutes = require('./api');

const commentRoutes = require('./api/comment-routes');

// const postRoutes = require('./api/post-routes');

// const userRoutes = require('./api/user-routes')

router.use('/', commentRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;