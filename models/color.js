const mongoose = require('mongoose')

// SCHEMA
const ColorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  easyRgb: {
    type: Number,
    required: true,
    default: 0
  },
  hardRgb: {
    type: Number,
    required: true,
    default: 0
  },
  easyHex: {
    type: Number,
    required: true,
    default: 0
  },
  hardHex: {
    type: Number,
    required: true,
    default: 0
  },
  money: {
    type: Number,
    required: true,
    default: 0
  },
  market1: {
    type: Boolean,
    required: true,
    default: false
  },
  market2: {
    type: Boolean,
    required: true,
    default: false
  },
  market3: {
    type: Boolean,
    required: true,
    default: false
  },
  theme: {
    type: Number,
    required: true,
    default: 0
  }
})

module.exports = new mongoose.model('Color', ColorSchema)