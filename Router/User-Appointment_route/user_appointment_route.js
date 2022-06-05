const route = require('express').Router()

const appointmentController = require('../../controller/User-Appointment/appointment_controller')

require('dotenv').config()

route.get(`${process.env.USER_ROUTE}/appointment`, appointmentController.findData)


module.exports = route