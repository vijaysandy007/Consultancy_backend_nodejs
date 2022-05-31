const express = require('express')
const router = express.Router();
const employeeController = require('../../controller/employee/employee_controller')

router.post('/employee', employeeController.createEmployee)
router.get('/employee', employeeController.getEmployee)
router.patch('/employee/:id', employeeController.updateEmployee )
router.get('/employee/:id', employeeController.employeeById)
router.delete('/employee/:id', employeeController.deleteEmployee)
module.exports = router