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

  get(id) {
    const actualId = this.fullyQualifiedId(id);
    const key = datastore.key([datasetKind, actualId]);
    return datastore
      .get(key)
      .then(queryResult => datastoreEntityToDataset(queryResult[0]));
  }
};
