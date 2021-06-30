const express = require('express');
const Routes = require('./routes/routes');
const router = express();
router.use('/', Routes);
module.exports = router;