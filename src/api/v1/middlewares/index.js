"use strict";

// Las funciones middleware suelen ser utilizadas como mecanismo para verificar niveles de acceso antes de entrar en una ruta, manejo de errores, validación de datos, etc.
var createError = require('http-errors');

module.exports.error404Handler = function (req, res, next) {
  next(createError(404));
}; // eslint-disable-next-line


module.exports.errorHandler = function (err, req, res, _next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.send({
    message: err.message
  });
};