const mongoose = require('mongoose')

const purposeSchema = mongoose.Schema({
  purpose_name: {
    type: String,
    required: true
  },

  status: {
    type: Boolean,
    default: false
  }
})

const purpose = mongoose.model('purpose', purposeSchema)

module.exports = purpose