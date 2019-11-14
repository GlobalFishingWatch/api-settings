const flagsData = require("./flags");
const rfmosData = require("./rfmos");
const portsData = require("./ports");

module.exports = {
  async get(dataset) {
    const [encounter, loitering, rfmos, flagStates, flagStateGroups] = await Promise.all([
      portsData.get(dataset.portsGCSPath),
      portsData.get(dataset.portsLoiteringGCSPath),
      rfmosData.get(),
      flagsData.get(),
      flagsData.getGroups()
    ]);
    return { ports: { encounter, loitering }, rfmos, flagStates, flagStateGroups };
  }
};
