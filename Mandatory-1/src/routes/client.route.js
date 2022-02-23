module.exports = app => {
    const client = require('../controllers/client.controller.js');
    const router = require('express').Router();    
    
    router.get('/', client.home);

    app.use('', router);
};