const mongoose = require('mongoose')

const purposeSchema = mongoose.Schema({
    purpose_name:{
        type:String,
        required: true
    },

    staus:{
      type:Boolean,
      default:true
    }
})

const purpose = mongoose.model('purpose', purposeSchema)

module.exports = purpose