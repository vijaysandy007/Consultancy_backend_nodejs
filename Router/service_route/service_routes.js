const express = require('express')
const app = express.Router()
const serviceController = require('../../controller/service_controler/service_controller')
require('dotenv').config()

app.post(`${process.env.ADMIN_ROUTE}/service`, serviceController.createService)
app.get(`${process.env.ADMIN_ROUTE}/service`, serviceController.getAllService)
app.patch(`${process.env.ADMIN_ROUTE}/service/:id`, serviceController.updateService)
app.delete(`${process.env.ADMIN_ROUTE}/service/:id`, serviceController.deleteService)

module.exports = app