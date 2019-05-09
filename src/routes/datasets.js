const datasets = require("../data/datasets");
const log = require("../data/log");

const loadDataset = async (req, res, next) => {
  try {
    const datasetId = req.swagger.params.dataset.value;

    log.debug(`Loading dataset ${datasetId}`);
    const dataset = await datasets.get(datasetId);
    if (!dataset) {
      log.debug(`Dataset ${datasetId} does not exist`);
      return res.sendStatus(404);
    }
    req.dataset = dataset;
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = app => {
  app.get("/datasets", async (req, res, next) => {
    try {
      const result = await datasets.list();
      return res.json(result);
    } catch (error) {
      return next(error);
    }
  });

  app.get("/datasets/:dataset", loadDataset, async (req, res, next) => {
    try {
      const datasetId = req.swagger.params.dataset.value;

      log.debug(`Loading dataset ${datasetId}`);
      const dataset = await datasets.get(datasetId);
      if (!dataset) {
        log.debug(`Dataset ${datasetId} does not exist`);
        return res.sendStatus(404);
      }
      return res.json({
        name: req.swagger.params.dataset.value,
        ...dataset
      });
    } catch (error) {
      return next(error);
    }
  });
};
