'use strict';
const { BigQuery } = require('@google-cloud/bigquery');

const initiateBigQuery = () => {
  return new BigQuery({
    keyFilename: './config/keys.json',
    projectId: 'phaedra-marketing-automation'
  });
}

const uploadDataToBigQuery = async (bidData,  bigQueryInstance, dataset, tableName) => {
    return await bigQueryInstance
    .dataset(dataset) //phaedra_bids
    .table(tableName) //bids
    .insert(bidData);
}

module.exports = {
  uploadDataToBigQuery,
  initiateBigQuery
};
