const employeeSchema = require('../../mongoose_schema/employeeSchema')

const createEmployee = async (req,res) =>{
    const isEmployee  = await employeeSchema(req.body)
    try {
        if(!isEmployee){
            return res.status(400).send('Employee cannot be created')
        }
        const empSave = await isEmployee.save();
        res.status(200).json({status:200, data:empSave, message:'successfully created'})
       
         
     } catch (error) {
        res.status(500).json({status:500,  message:`employee cannot be created ${error}`})
         
     }
}

const getEmployee = async (req,res) =>{
    
    try {
        const {page, limit} = req.body
        const skip = (page -1) * limit
        const getAllEmployee = await employeeSchema.find({}, {}, {limit: limit, skip: skip})
        const count = await employeeSchema.find().count()
        if(!getAllEmployee){
            res.status(500).json({ message: 'Employee cannot be Fecthed'})
        }
        if(!page || !limit){
            res.status(500).json({ message: 'Please provide Page and Limit'})
        }

        res.status(200).json({count: count,data:getAllEmployee,  message: 'Employee Fecthed'})

    } catch (error) {
        res.status(500).json({message: error})
        
    }
}

const updateEmployee = async (req,res) =>{
    try {
        const updateEmpoyee = await employeeSchema.findByIdAndUpdate({_id: req.params.id}, {
            name: req.body.name,
            image: req.body.image,
            employee_id: req.body.employee_id,
            email: req.body.email,
            role: req.body.role,
            linkedin_url: req.body.linkedin_url
        }, {new: true})
        if(!updateEmpoyee){
           return res.status(400).json({message: 'employee Cannot Be updated please check params ID or Request body'})
        }
        res.status(200).json({data: updateEmpoyee, message: `succesfully Updated ${req.params.id}`})
    } catch (error) {
        res.status(200).send(error)
        
    }
}

const employeeById =async (req,res) =>{
    const getEmployee = await employeeSchema.findById({_id: req.params.id})
    if(!getEmployee){
        return res.status(400).json({message: 'Cannot Find Employee Id'})
    }
    res.status(400).json({ data:getEmployee, message: 'Succesfully fetched'})
}

const deleteEmployee = async (req,res) =>{
    try {

        const employee = await employeeSchema.findByIdAndDelete({_id:req.params.id})
        if(!employee){
            return res.status(400).json({message: 'Cannot Find Employee Id'})
        }
        
        res.status(400).json({ data:employee, message: 'Succesfully fetched'})
        
    } catch (error) {
        res.status(500).json({message: 'Some Thing Went Wrong'})
        
    }
   

}

module.exports ={
    createEmployee,
    getEmployee,
    updateEmployee,
    employeeById,
    deleteEmployee
}