"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var mongoose = _interopRequireWildcard(require("mongoose"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var contractsSchema = new mongoose.Schema({
  "IdContrato": {
    type: Number,
    required: true,
    unique: true
  },
  "Folio": {
    type: String,
    required: true,
    unique: true
  },
  "PedidoSAP": {
    type: String,
    required: true,
    unique: true
  },
  "NumEntregaSAP": {
    type: String,
    required: true
  },
  "IdPersonaPK": {
    type: Number,
    required: true,
    unique: true
  },
  "IdPerfilPK": {
    type: Number,
    required: true,
    unique: true
  },
  "Ruta": {
    type: String,
    required: true
  },
  "detail_row": {
    "FechaReg": {
      type: String,
      "default": Date.now()
    },
    "UsuarioReg": {
      type: String,
      required: true
    },
    "FechaUltMod": {
      type: String,
      "default": Date.now()
    },
    "UsuarioMod": {
      type: String,
      required: true
    },
    "Activo": {
      type: String,
      required: true
    },
    "Borrado": {
      type: String,
      required: true
    }
  },
  "contratos_estatus": [{
    "IdEstatusDet": {
      type: Number,
      required: true
    },
    "IdTipoEstatus": {
      type: Number,
      required: true
    },
    "IdEstatus": {
      type: Number,
      required: true
    },
    "DesEstatus": {
      type: String,
      required: true
    },
    "Actual": {
      type: String,
      required: true
    },
    "Observacion": {
      type: String,
      required: true
    },
    "detail_row": {
      "FechaReg": {
        type: String,
        "default": Date.now()
      },
      "UsuarioReg": {
        type: String,
        required: true
      }
    }
  }],
  "contratos_detalle": [{
    "IdEquipo": {
      type: Number,
      required: true
    },
    "Cantidad": {
      type: Number,
      required: true
    },
    "DesEquipo": {
      type: String,
      required: true
    },
    "Marca": {
      type: String,
      required: true
    },
    "Placa": {
      type: String,
      required: true
    },
    "NumSerie": {
      type: String,
      required: true
    },
    "detail_row": {
      "FechaReg": {
        type: String,
        "default": Date.now()
      },
      "UsuarioReg": {
        type: String,
        required: true
      },
      "FechaUltMod": {
        type: String,
        "default": Date.now()
      },
      "UsuarioMod": {
        type: String,
        required: true
      },
      "Activo": {
        type: String,
        required: true
      },
      "Borrado": {
        type: String,
        required: true
      }
    }
  }]
});

var _default = mongoose.model('contratos', contractsSchema);

exports["default"] = _default;