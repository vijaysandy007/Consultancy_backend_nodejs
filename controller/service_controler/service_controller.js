const serviceSchema = require('../../mongoose_schema/service_schema')

const createService = async (req, res) => {

    try {
        const service = await new serviceSchema({
            service_name: req.body.service_name,
            status:req.body.status
        })

        if (!service) {
         return res.status(400).send('Something went wrong')
        }
        await service.save()
         res.status(200).json({data:service, message: 'Successfully created'})

    } catch (error) {
         res.status(500).send(error)


    }
}

const getAllService = async (req,res) =>{
    try {
        const {page, limit } = req.body
        const skip = (page -1) * limit
        const service = await serviceSchema.find({}, {}, {limit:limit, skip:skip})

        if(!service){
         return res.status(400).send('Something went wrong')

        }
        res.status(200).json({data:service, message: 'Successfully Fetched'})


    } catch (error) {
        res.status(500).send(error)
        
    }
}

const updateService = async (req,res) =>{
    try {
         const service = await serviceSchema.findByIdAndUpdate({_id:req.params.id}, {
            service_name: req.body.service_name,
            status: req.body.status
         }, {new:true})

         if(!service){
            return res.status(400).send('Something went wrong')
         }
        res.status(200).json({data:service, message: 'Successfully Updated'})


    } catch (error) {
        res.status(500).send(error)
        
    }
}

const deleteService = async (req,res) =>{
try {
    const service = await serviceSchema.findByIdAndDelete({_id:req.params.id}, {new:true})

    if(!service){
        return res.status(400).send('Something went wrong')
    }

    const {page , limit} = req.body
    const skip = (page -1) * limit

    const findResetData = await serviceSchema.find({}, {}, {limit:limit, skip:skip})

    res.status(200).json({data:findResetData, message: 'Successfully Updated'}) 
} catch (error) {
    res.status(500).send(error)
    
}
}

module.exports ={
    createService,
    getAllService,
    updateService,
    deleteService
}