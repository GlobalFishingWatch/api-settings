const flagsData = require("./flags");
const rfmosData = require("./rfmos");
const portsData = require("./ports");

module.exports = {
  async get(dataset) {
    const promises = [rfmosData.get(), flagsData.get(), flagsData.getGroups()]
    if (dataset && dataset.externalResources) {
      const { portsGCSPath, portsLoiteringGCSPath } = dataset.externalResources
      if (portsGCSPath) {
        promises.push(portsData.get(portsGCSPath))
      }
      if (portsLoiteringGCSPath) {
        promises.push(portsData.get(portsLoiteringGCSPath))
      }
    }
    const [rfmos, flagStates, flagStateGroups, encounter = [], loitering = [] ] = await Promise.all(promises);
    return { rfmos, flagStates, flagStateGroups, ports: { encounter, loitering }  };
  }
};
