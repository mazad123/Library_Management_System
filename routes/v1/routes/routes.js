const express = require('express');
const adminRoutes = require('./admin/routes');
const router = express();

router.use('/admin', adminRoutes);

module.exports = router;