const { koa } = require('auth-middleware');
const Router = require('koa-router');
const config = require('../config');

class PlatformRouter {
  static async getPlatform(ctx) {
    ctx.body = { services: config.services };
  }
}

const router = new Router({
  prefix: '/platform',
});
router.use(koa.obtainUser(true));

router.get('/', PlatformRouter.getPlatform);

module.exports = router;
