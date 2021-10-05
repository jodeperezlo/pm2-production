"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteContract = exports.putContract = exports.postContract = exports.getContract = exports.getContractsList = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Contracts = _interopRequireDefault(require("../models/Contracts"));

// GET CONTRACTS LIST
var getContractsList = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var contractsList;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Contracts["default"].find();

          case 3:
            contractsList = _context.sent;
            res.status(200).send(contractsList);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              message: "Error: " + _context.t0
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getContractsList(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // GET CONTRACT BY ID


exports.getContractsList = getContractsList;

var getContract = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var contract;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Contracts["default"].findById(req.params.id);

          case 3:
            contract = _context2.sent;
            res.status(200).send(contract);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json({
              message: "Error: " + _context2.t0
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getContract(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // ADD (POST) CONTRACT


exports.getContract = getContract;

var postContract = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var contract;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            contract = new _Contracts["default"]({
              "IdContrato": req.body.IdContrato,
              "Folio": req.body.Folio,
              "PedidoSAP": req.body.PedidoSAP,
              "NumEntregaSAP": req.body.NumEntregaSAP,
              "IdPersonaPK": req.body.IdPersonaPK,
              "IdPerfilPK": req.body.IdPerfilPK,
              "Ruta": req.body.Ruta,
              "detail_row": {
                "FechaReg": req.body.FechaReg_detail_row,
                "UsuarioReg": req.body.UsuarioReg_detail_row,
                "FechaUltMod": req.body.FechaUltMod_detail_row,
                "UsuarioMod": req.body.UsuarioMod_detail_row,
                "Activo": req.body.Activo_detail_row,
                "Borrado": req.body.Borrado_detail_row
              },
              "contratos_estatus": [{
                "IdEstatusDet": req.body.IdEstatusDet_contratos_estatus,
                "IdTipoEstatus": req.body.IdTipoEstatus_contratos_estatus,
                "IdEstatus": req.body.IdEstatus_contratos_estatus,
                "DesEstatus": req.body.DesEstatus_contratos_estatus,
                "Actual": req.body.Actual_contratos_estatus,
                "Observacion": req.body.Observacion_contratos_estatus,
                "detail_row": {
                  "FechaReg": req.body.FechaReg_contratos_estatus,
                  "UsuarioReg": req.body.UsuarioReg_contratos_estatus
                }
              }],
              "contratos_detalle": [{
                "IdEquipo": req.body.IdEquipo_contratos_detalle,
                "Cantidad": req.body.Cantidad_contratos_detalle,
                "DesEquipo": req.body.DesEquipo_contratos_detalle,
                "Marca": req.body.Marca_contratos_detalle,
                "Placa": req.body.Placa_contratos_detalle,
                "NumSerie": req.body.NumSerie_contratos_detalle,
                "detail_row": {
                  "FechaReg": req.body.FechaReg_contratos_detalle,
                  "UsuarioReg": req.body.UsuarioReg_contratos_detalle,
                  "FechaUltMod": req.body.FechaUltMod_contratos_detalle,
                  "UsuarioMod": req.body.UsuarioMod_contratos_detalle,
                  "Activo": req.body.Activo_contratos_detalle,
                  "Borrado": req.body.Borrado_contratos_detalle
                }
              }]
            });
            _context3.prev = 1;
            _context3.next = 4;
            return contract.save();

          case 4:
            contract = _context3.sent;
            res.status(200).send(contract);
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            res.status(500).json({
              error: "The contract cannot be created. Error: " + _context3.t0,
              success: false
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));

  return function postContract(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); // UPDATE (PUT) CONTRACT


exports.postContract = postContract;

var putContract = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var contract;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Contracts["default"].findByIdAndUpdate(req.params.id, {
              "IdContrato": req.body.IdContrato,
              "Folio": req.body.Folio,
              "PedidoSAP": req.body.PedidoSAP,
              "NumEntregaSAP": req.body.NumEntregaSAP,
              "IdPersonaPK": req.body.IdPersonaPK,
              "IdPerfilPK": req.body.IdPerfilPK,
              "Ruta": req.body.Ruta,
              "detail_row": {
                "FechaReg": req.body.FechaReg_detail_row,
                "UsuarioReg": req.body.UsuarioReg_detail_row,
                "FechaUltMod": req.body.FechaUltMod_detail_row,
                "UsuarioMod": req.body.UsuarioMod_detail_row,
                "Activo": req.body.Activo_detail_row,
                "Borrado": req.body.Borrado_detail_row
              },
              "contratos_estatus": [{
                "IdEstatusDet": req.body.IdEstatusDet_contratos_estatus,
                "IdTipoEstatus": req.body.IdTipoEstatus_contratos_estatus,
                "IdEstatus": req.body.IdEstatus_contratos_estatus,
                "DesEstatus": req.body.DesEstatus_contratos_estatus,
                "Actual": req.body.Actual_contratos_estatus,
                "Observacion": req.body.Observacion_contratos_estatus,
                "detail_row": {
                  "FechaReg": req.body.FechaReg_contratos_estatus,
                  "UsuarioReg": req.body.UsuarioReg_contratos_estatus
                }
              }],
              "contratos_detalle": [{
                "IdEquipo": req.body.IdEquipo_contratos_detalle,
                "Cantidad": req.body.Cantidad_contratos_detalle,
                "DesEquipo": req.body.DesEquipo_contratos_detalle,
                "Marca": req.body.Marca_contratos_detalle,
                "Placa": req.body.Placa_contratos_detalle,
                "NumSerie": req.body.NumSerie_contratos_detalle,
                "detail_row": {
                  "FechaReg": req.body.FechaReg_contratos_detalle,
                  "UsuarioReg": req.body.UsuarioReg_contratos_detalle,
                  "FechaUltMod": req.body.FechaUltMod_contratos_detalle,
                  "UsuarioMod": req.body.UsuarioMod_contratos_detalle,
                  "Activo": req.body.Activo_contratos_detalle,
                  "Borrado": req.body.Borrado_contratos_detalle
                }
              }]
            }, {
              "new": true
            });

          case 3:
            contract = _context4.sent;
            res.status(200).send(contract);
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json({
              error: "The contract cannot be updated",
              success: false
            });

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function putContract(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); // DELETE CONTRACT


exports.putContract = putContract;

var deleteContract = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _Contracts["default"].findByIdAndRemove(req.params.id).then(function (contract) {
              if (contract) {
                return res.status(200).json({
                  success: true,
                  message: "The contract was deleted successfully"
                });
              } else {
                return res.status(404).json({
                  message: "The contract not found",
                  success: false
                });
              }
            })["catch"](function (err) {
              return res.status(400).json({
                success: false,
                error: err
              });
            });

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteContract(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteContract = deleteContract;