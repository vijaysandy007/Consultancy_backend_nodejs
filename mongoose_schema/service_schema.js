const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema({
  service_name: {
    type: String,
    required: true
  },

  status: {
    type: Boolean,
    default: true
  }
})

const service = mongoose.model('service', serviceSchema)

module.exports = service