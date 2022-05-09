const express = require('express');
const { errorHandler } = require('../middlewares');

const services = require('../services');

// list of controllers here
const bids = require('../controllers/bids');

const routersInit = () => {
    const router = express();
    // register api points
    router.use('/bid', bids(services));
    router.get("/test", (req, res) => {
        res.json({ success: true, message: "Testing mango speaking" })
    })

    // catch api all errors
    router.use(errorHandler);
    return router;
};

module.exports = routersInit;
