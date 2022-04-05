'use strict';

const Bid = require("../../models/bid");
const validate = require("../controllers/bids/bidValidation");

const uploadDataToDB = async (data) => {
    // Validation
    const { error } = validate.create(data);
    if (error) return res.status(400).send({ error: true, msg: error.details[0].message });

    // Save new Bid in DB
    const newBid = new Bid(data);
    await newBid.save();
}

module.exports = {
    uploadDataToDB,
};
