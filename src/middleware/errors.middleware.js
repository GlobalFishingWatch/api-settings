const {
  errors: { HttpException, UnprocessableEntityException }
} = require('auth-middleware');

const swaggerError2ValidationError = errors => ({
  fields: errors.map(error => ({
    field: error.path.join('.'),
    errors: [
      {
        code: 422,
        message: `${error.message}`
      }
    ]
  })),

  general: []
});

async function handleErrors(ctx, next) {
  try {
    await next();
  } catch (err) {
    if (err instanceof HttpException) {
      if (err instanceof UnprocessableEntityException) {
        ctx.status = err.code;
        ctx.body = swaggerError2ValidationError(err.params);
      } else {
        ctx.throw(err.code, err.message);
      }
    } else {
      if (ctx.status === 400) {
        throw err;
      }

      ctx.throw(500, 'Generic error');
    }
  }
}

module.exports = {
  handleErrors
};
