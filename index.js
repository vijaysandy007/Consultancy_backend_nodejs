require('dotenv').config();
const express = require('express')
const app = express();
require('./DB_CONNECTION/db_connection')
app.use(express.json());

const employeeRoute = require('./Router/employee_routes/employee_router');
const slotsRoute = require('./Router/All_slots/all_slots_routes')
const serviceRoute = require('./Router/service_route/service_routes')
const purposeRoute = require('./Router/Purpose_route/purpose_route')
const employeeProfileAllocate = require('./Router/Employee_Profile/allocate_employee_by_id')
const separteAllocate = require('./Router/UserSeprateAllocate/separte_router')
const appointment = require('./Router/User-Appointment_route/user_appointment_route')
app.use(employeeRoute, slotsRoute, serviceRoute, purposeRoute, employeeProfileAllocate, separteAllocate, appointment)


app.listen(process.env.PORT, ()=>{
    console.log(`server started ${process.env.PORT}`)
})

