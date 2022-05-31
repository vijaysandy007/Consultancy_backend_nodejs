const moongse = require('mongoose')

const allocateSubSchema = moongse.Schema({
   from:{
      type:String,

   },
   to:{
      type:String
   }
})

const employee_calaender = moongse.Schema({
    date:{
       type: Date
    },
    slot_name:{
       type:String
    },
   employee_id:{
    type: String,
   //  required: true
   },
   session_id:{ 
     type:String,
   },   
   alloacte:[allocateSubSchema]
})

const alloacte = moongse.model('employee_allocate', employee_calaender)

module.exports = alloacte

