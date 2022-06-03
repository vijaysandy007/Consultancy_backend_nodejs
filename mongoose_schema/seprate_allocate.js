const mongoose = require('mongoose')

const sepration =  mongoose.Schema({
    fifteen_min_slot:[{from:String, to:String}],

    thirty_min_slot:[{from:String, to:String}]
})

const createModel = mongoose.model('slotSepration', sepration)

module.exports = createModel