const express = require('express')
const router = express.Router();
const employeeController = require('../../controller/employee/employee_controller')
require('dotenv').config()


router.post(`${process.env.ADMIN_ROUTE}/employee`, employeeController.createEmployee)
router.get(`${process.env.ADMIN_ROUTE}/employee`, employeeController.getEmployee)
router.patch(`${process.env.ADMIN_ROUTE}/employee/:id`, employeeController.updateEmployee)
router.get(`${process.env.ADMIN_ROUTE}/employee/:id`, employeeController.employeeById)
router.delete(`${process.env.ADMIN_ROUTE}/employee/:id`, employeeController.deleteEmployee)
module.exports = router