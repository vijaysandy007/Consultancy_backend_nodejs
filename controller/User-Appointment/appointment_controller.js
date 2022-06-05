const appointmentSchema = require('../../mongoose_schema/user_appointment')
const service = require('../../mongoose_schema/service_schema');

const findData = async (req, res) =>{
    const getData = await appointmentSchema.findOne({}).populate('service_id').then(data =>{
        res.status(200).json({data:data})
    })
}

module.exports ={
    findData
}

