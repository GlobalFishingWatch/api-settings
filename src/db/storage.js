const { Storage } = require('@google-cloud/storage');
const config = require('../config');

module.exports = new Storage(config.gcloud.storage);
