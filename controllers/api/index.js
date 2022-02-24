const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const searchRoutes = require('./search-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/search', searchRoutes);

module.exports = router;