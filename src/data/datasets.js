const datastore = require("../google/datastore");

const datasetKind = "Dataset";

const datastoreEntityToDataset = entity => {
  const key = entity[datastore.KEY];
  return {
    ...entity,
    id: key.name
  };
};

module.exports = {
  fullyQualifiedId(id) {
    const parts = id.split(":");

    if (parts.length === 1) {
      parts.push("latest");
    }

    return parts.join(":");
  },

  list() {
    const query = datastore.createQuery(datasetKind);
    return datastore
      .runQuery(query)
      .then(queryResults => queryResults[0].map(datastoreEntityToDataset));
  },

  async get(id) {
    const actualId = this.fullyQualifiedId(id);
    const key = datastore.key([datasetKind, actualId]);
    const result = await datastore.get(key);
    return result[0];
  },

  async getMultiple(ids) {
    const keys = ids
      .map(id => this.fullyQualifiedId(id))
      .map(id => datastore.key([datasetKind, id]));

    const result = await datastore.get(keys);

    return result[0].map(datastoreEntityToDataset);
  }
};
