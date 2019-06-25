const datasets = require("../data/datasets");
const log = require("../data/log");

module.exports = app => {
  app.get("/datasets", async (req, res, next) => {
    try {
      const ids = req.swagger.params.ids.value;

      if (ids && ids.length > 0) {
        log.debug(`Requesting specific datasets ${ids}`);
        const results = await datasets.getMultiple(ids);
        if (!results || results.length < ids.length) {
          log.debug(`Requesting unexisting dataset in ${ids}`);
          return res.sendStatus(404);
        }

        return res.json(results);
      }

      log.debug("Requesting all datasets");
      const results = await datasets.list();
      return res.json(results);
    } catch (error) {
      return next(error);
    }
  });

  app.get("/datasets/:dataset", async (req, res, next) => {
    try {
      const id = req.swagger.params.dataset.value;

      log.debug(`Loading dataset ${id}`);
      const result = await datasets.get(id);
      if (!result) {
        log.debug(`Dataset ${id} does not exist`);
        return res.sendStatus(404);
      }
      return res.json(result);
    } catch (error) {
      return next(error);
    }
  });
};
