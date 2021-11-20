
const router = require('express').Router();
// for api routes: if no file provided default is index.js file in folder
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;