const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes');
const settingsRoutes = require('./settings-routes');
const profileRoutes = require('./profile-routes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/settings', settingsRoutes);
router.use('/profile', profileRoutes);

router.get('*', (req, res) => {
    res.render('404');
  });

module.exports = router;