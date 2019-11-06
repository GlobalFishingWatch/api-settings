const log = require("../log");
const storage = require("../../google/storage");
const BUCKET = 'world-fishing-827'

module.exports = {
  async get(portsGCSPath) {
    try {
      const bucket = storage.bucket(BUCKET);
      const file = bucket.file(portsGCSPath);
      const buffer = await file.download();
      const ports = JSON.parse(buffer.toString())
      return ports
    } catch(e) {
      log.error(`Error fetching ports dataset: ${error}`);
      return []
    }
  }
};
