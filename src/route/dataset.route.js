const {
  koa,
  errors: { NotFoundException },
  utils: { checkExistPermissionInList },
} = require('auth-middleware');
const Router = require('koa-router');
const datasets = require('../service/datasets');
const configData = require('../data/config');
const log = require('../log');

class DatasetRouter {
  static async getAllDatasets(ctx) {
    const ids = ctx.query.ids ? ctx.query.ids.split(',') : [];

    if (ids && ids.length > 0) {
      log.debug(`Requesting specific datasets ${ids}`);
      const results = await datasets.getMultiple(ids);
      if (!results || results.length < ids.length) {
        log.debug(`Requesting unexisting dataset in ${ids}`);
        throw new NotFoundException(`Requesting unexisting dataset in ${ids}`);
      }
      ctx.body = results.filter(dataset =>
        checkExistPermissionInList(ctx.state.permissions, {
          action: 'read',
          type: 'dataset',
          value: dataset.id,
        }),
      );
      return;
    }

    log.debug('Requesting all datasets');
    const results = await datasets.list();
    ctx.body = results.filter(dataset =>
      checkExistPermissionInList(ctx.state.permissions, {
        action: 'read',
        type: 'dataset',
        value: dataset.id,
      }),
    );
  }

  static async getDatasetById(ctx) {
    const id = ctx.params.dataset;

    log.debug(`Loading dataset ${id}`);
    const result = await datasets.get(id);
    if (!result) {
      log.debug(`Dataset ${id} does not exist`);
      throw new NotFoundException(`Dataset ${id} does not exist`);
    }
    ctx.body = result;
    return;
  }

  static async getConfigOfDataset(ctx) {
    const id = ctx.params.dataset;

    log.debug(`Loading dataset ${id}`);
    const dataset = await datasets.get(id);
    if (!dataset) {
      log.debug(`Dataset ${id} does not exist`);
      throw new NotFoundException(`Dataset ${id} does not exist`);
    }
    log.debug('Requesting dataset config');
    const config = await configData.get(dataset);
    ctx.body = config;
  }
}

const router = new Router({
  prefix: '/datasets',
});
router.use(koa.obtainUser(true));

router.get('/', koa.obtainPermissions(), DatasetRouter.getAllDatasets);

router.get(
  '/:dataset',
  koa.checkPermissionsWithRequestParams([
    { action: 'read', type: 'dataset', valueParam: 'dataset' },
  ]),
  DatasetRouter.getDatasetById,
);

router.get(
  '/:dataset/config',
  koa.checkPermissionsWithRequestParams([
    { action: 'read', type: 'dataset', valueParam: 'dataset' },
  ]),
  DatasetRouter.getConfigOfDataset,
);

module.exports = router;
