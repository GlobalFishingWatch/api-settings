const log = require("../log");
const request = require('request-promise-native');

module.exports = {
  async get(portsGCSPath) {
    try {
      const ports = await request.get({ uri: portsGCSPath, json: true })
      return ports
    } catch(e) {
      log.error(`Error fetching ports dataset: ${error}`);
      return []
    }
  }
};
