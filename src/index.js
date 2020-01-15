const Koa = require('koa');
const Body = require('koa-body');
const Logger = require('koa-logger');
const Helmet = require('koa-helmet');
const Cors = require('@koa/cors');
const compress = require('koa-compress');
const { koa } = require('auth-middleware');

const config = require('./config');
const log = require('./log');
const logMiddleware = require('./middleware/log.middleware');
const errors = require('./middleware/errors.middleware');

const datasetRouter = require('./route/dataset.route');
const platformRouter = require('./route/platform.route');

const app = new Koa();
if (process.env.ENV === 'dev') {
  app.use(Logger());
}

app.use(Cors());
app.use(Body());
app.use(Helmet());
app.use(
  compress({
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH
  })
);
app.use(errors.handleErrors);
app.use(logMiddleware.logger());
app.use(koa.health());

app.use(datasetRouter.routes()).use(datasetRouter.allowedMethods());
app.use(platformRouter.routes()).use(platformRouter.allowedMethods());

app.listen(config.server.port, () => {
  log.info(`Listening on http://localhost:${config.server.port}`);
});
