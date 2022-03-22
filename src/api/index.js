const express = require('express');
const { errorHandler } = require('../middlewares');

const services = require('../services');

// list of controllers here
const bids = require('../controllers/bids');

// combine servicess ino one object
// const services = { BigQueryService };

const routersInit = () => {
    const router = express();
    // register api points
    router.use('/bid' , bids(services));

    // catch api all errors
    router.use(errorHandler);
    return router;
};

module.exports = routersInit;