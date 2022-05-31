const express = require('express')
const app = express.Router()
const allocateEmployeeController = require('../../controller/employee_profile/employee_profile_allocate')
require('dotenv').config()


app.post(`${process.env.ADMIN_ROUTE}/allocateByEmployee/:id`, allocateEmployeeController.createAllocateByEmployee)

app.get(`${process.env.ADMIN_ROUTE}/getAllocateData/:id`, allocateEmployeeController.getAllocateDate)

app.put(`${process.env.ADMIN_ROUTE}/updateEmployeeSlots/:id`, allocateEmployeeController.updateSlots)

app.put(`${process.env.ADMIN_ROUTE}/deleteAllocateEmployee/:id`, allocateEmployeeController.deleteAllocateSession)
module.exports = app