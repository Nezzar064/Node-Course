const logger = require('loglevel');
const beers = require('../db/beers.js');

const moduleName = 'beers.controller.js - ';

const validationArray = [ 'name', 'type', 'abv', 'colour' ];

exports.create = (req, res) => {
    logger.warn(`${moduleName} request to create beer: ${JSON.stringify(req.body)}`);

    if (!req.body || JSON.stringify(Object.keys(req.body)) !== JSON.stringify(validationArray) ) {
        console.log(Object.keys(req.body));
        logger.error(`${moduleName} invalid request body / properties`);
        res.status(400).send({
            message: "empty body / wrong properties supplied"
        });
    }

    try {
        const result = beers.create(req.body);
        res.status(200).send(result);
    } catch (err) {
        logger.error(`${moduleName} unexpected error on create beer ${JSON.stringify(err)} `);
        res.status(500).end();
    }
};


exports.findById = (req, res) => {
    logger.warn(`${moduleName} request to retrieve beer by id: ${req.params.id}`);

    try {
        const result = beers.findById(req.params.id);
        res.status(200).send(result);
    } catch (err) {
        logger.error(`${moduleName} unexpected error on find beer by id: ${req.params.id}, error: ${err} `);
        res.status(500).end();
    }
};

exports.findAll = (req, res) => {
    logger.warn(`${moduleName} request to retrieve all beers`);

    try {
        const result = beers.findAll();
        res.status(200).send(result);
    } catch (err) {
        logger.error(`${moduleName} unexpected error on retrieve all beers: ${req.params.id}, error: ${JSON.stringify(err)} `);
        res.status(500).end();
    }
};

exports.findAllByType = (req, res) => {
    logger.warn(`${moduleName} request to retrieve beer by type: ${req.params.type}`);

    try {
        const result = beers.findAllByType(req.params.type);
        res.status(200).send(result);
    } catch (err) {
        logger.error(`${moduleName} unexpected error on retrieve beer by type: ${req.params.type}, error: ${JSON.stringify(err)} `);
        res.status(500).end();
    }
};

exports.del = (req, res) => {
    logger.warn(`${moduleName} request to delete beer by id: ${req.params.id}`);

    try {
        beers.del(req.params.id);
        res.status(200).send({ message: `beer with id: ${req.params.id} successfully deleted`});
    } catch (err) {
        logger.error(`${moduleName} unexpected error on delete beer by id: ${req.params.id}, error: ${JSON.stringify(err)} `);
        res.status(500).end();
    }
};

exports.update = (req, res) => {
    logger.warn(`${moduleName} request to update beer by id: ${req.params.id}, values: ${JSON.stringify(req.body)} `);
    
    if (!req.body) {
        logger.error(`${moduleName} invalid request body / properties`);
        res.status(400).send({
            message: "empty body / wrong properties supplied"
        });
    }

    try {
        const result = beers.update(req.body, req.params.id);
        res.status(200).send(result);
    } catch (err) {
        logger.error(`${moduleName} unexpected error on update beer by id: ${req.params.id}, error: ${JSON.stringify(err)} `);
        res.status(500).end();
    }
};
