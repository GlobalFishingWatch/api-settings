const flagsData = require('./flags');
const rfmosData = require('./rfmos');
const portsData = require('./ports');

module.exports = {
  async get(dataset) {
    const promises = [rfmosData.get(), flagsData.get(), flagsData.getGroups()];
    if (dataset && dataset.externalResources) {
      const {
        encountersNextPortUrl,
        loiteringNextPortUrl,
      } = dataset.externalResources;
      if (encountersNextPortUrl) {
        promises.push(portsData.get(encountersNextPortUrl));
      }
      if (loiteringNextPortUrl) {
        promises.push(portsData.get(loiteringNextPortUrl));
      }
    }
    const [
      rfmos,
      flagStates,
      flagStateGroups,
      encounter = [],
      loitering = [],
    ] = await Promise.all(promises);
    return {
      rfmos,
      flagStates,
      flagStateGroups,
      ports: { encounter, loitering },
    };
  },
};
