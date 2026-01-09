// eslint-disable-next-line no-unused-vars
module.exports = function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  const code = err.code || 'INTERNAL_ERROR';
  const message = err.message || 'Something went wrong';

  const payload = { error: { code, message } };
  if (process.env.NODE_ENV !== 'production') {
    payload.error.details = err.details || undefined;
  }

  res.status(status).json(payload);
};
