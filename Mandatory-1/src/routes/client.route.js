module.exports = app => {
    const client = require('../controllers/client.controller.js');
    const router = require('express').Router();    
    
    router.get('/', client.home);
    router.get('/docs/:category', client.docs);

    app.use('', router);
};