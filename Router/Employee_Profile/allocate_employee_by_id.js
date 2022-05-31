const express = require('express')
const app = express.Router()
const allocateEmployeeController = require('../../controller/employee_profile/employee_profile_allocate')


app.post('/allocateByEmployee/:id', allocateEmployeeController.createAllocateByEmployee)

app.get('/getAllocateData/:id', allocateEmployeeController.getAllocateDate)

app.put('/updateEmployeeSlots/:id', allocateEmployeeController.updateSlots)

app.put('/deleteAllocateEmployee/:id', allocateEmployeeController.deleteAllocateSession)
module.exports = app