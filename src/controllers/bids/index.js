const { Router: router } = require('express');

const { syncBid } = require('./sync_bid');

module.exports = (services) => {
    const api = router();
    api.post('/sync-bid', syncBid(services));
    return api;
};

