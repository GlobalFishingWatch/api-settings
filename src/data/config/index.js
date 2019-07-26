const flagsData = require("./flags");
const rfmosData = require("./rfmos");
const portsData = require("./ports");

module.exports = {
  async get() {
    return {
      ports: await portsData.get(),
      rfmos: await rfmosData.get(),
      flagStates: await flagsData.get(),
      flagStateGroups: await flagsData.getGroups(),
    }
  }
};
