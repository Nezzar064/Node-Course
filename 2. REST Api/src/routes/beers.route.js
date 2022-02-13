module.exports = app => {
    const beers = require('../controllers/beers.controller.js');
    const router = require('express').Router();

    router.post('/', beers.create);
    router.get('/', beers.findAll);
    router.get('/type/:type', beers.findAllByType);
    router.get('/:id', beers.findById);
    router.put('/:id', beers.update);
    router.delete('/:id', beers.del);

    app.use('/api/beers', router);
};