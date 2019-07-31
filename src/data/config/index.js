const flagsData = require("./flags");
const rfmosData = require("./rfmos");
const portsData = require("./ports");

module.exports = {
  async get() {
    const [ports, rfmos, flagStates, flagStateGroups] = await Promise.all([
      portsData.get(),
      rfmosData.get(),
      flagsData.get(),
      flagsData.getGroups()
    ]);
    return { ports, rfmos, flagStates, flagStateGroups };
  }
};
