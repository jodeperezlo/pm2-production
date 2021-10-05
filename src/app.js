"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _contracts = _interopRequireDefault(require("./api/v1/routes/contracts.routes"));

var _config = _interopRequireDefault(require("./config/config"));

var _database = require("./config/database.config");

// Import Routes
// Config para variables de entorno
var app = (0, _express["default"])(); // Db connection

// Settings 
app.set('port', _config["default"].PORT || 3000); // Middlewares

app.use((0, _cors["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
})); // Routes

var api = _config["default"].API_URL || '/api/v1';
app.get('/', function (req, res) {
  res.end("Access to URL: ".concat(api));
});
app.get("".concat(api), function (req, res) {
  res.json({
    mesagge: "Welcome to API REST."
  });
}); // Contracts Routes

app.use("".concat(api), _contracts["default"]); // Export App

var _default = app;
exports["default"] = _default;