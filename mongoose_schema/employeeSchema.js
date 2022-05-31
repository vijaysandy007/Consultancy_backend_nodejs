const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema({
    image:{
     type:String,
     required:true
    },
    name:{
        type:String,
        required: true
    },
    employee_id:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    linkedin_url:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default: Date.now()
    }

})

const employeeModel = mongoose.model('employee', employeeSchema )

module.exports = employeeModel