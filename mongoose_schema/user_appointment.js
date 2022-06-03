const mongoose = require('mongoose')

const appointment = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile_number:{
        type:Number,
        required:true
    },
    purpose:{
        type:String,
        required:true
    },
    service:{
        type:String,
        required:true
    },
    time_zone:{
        type:String,

    },
    date:{
        type:Date
    },
    fifteen_min_slot:{
        type:Array
    },
    thirty_min_slot:{
        type:Array
    },
    meeting_type:{
        type:String
    }
})

const appointmentSchema = mongoose.model('appointment', appointment)
module.exports = appointmentSchema