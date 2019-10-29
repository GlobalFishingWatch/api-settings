const log = require("../log");
const storage = require("../../google/storage");
const BUCKET = 'world-fishing-827'

module.exports = {
  async get(portsDataset) {
    console.log('TCL: BUCKET', BUCKET)
    try {
      const bucket = storage.bucket(BUCKET);
      const file = bucket.file('pelagos/data/ports/' + portsDataset + '.json');
      const buffer = await file.download();
      const ports = JSON.parse(buffer.toString())
      return ports
    } catch(e) {
      log.error(`Error fetching ports dataset: ${error}`);
      return []
    }
  }
};
