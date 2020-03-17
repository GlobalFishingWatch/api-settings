const flagsData = require('./flags');
const eezsData = require('./eezs');
const rfmosData = require('./rfmos');
const portsData = require('./ports');

module.exports = {
  async get(dataset) {
    const promises = [
      eezsData.get(),
      rfmosData.get(),
      flagsData.get(),
      flagsData.getGroups(),
    ];
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
      eezs,
      rfmos,
      flagStates,
      flagStateGroups,
      encounter = [],
      loitering = [],
    ] = await Promise.all(promises);
    return {
      eezs,
      rfmos,
      flagStates,
      flagStateGroups,
      ports: { encounter, loitering },
    };
  },
};
