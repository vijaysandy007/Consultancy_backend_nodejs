const express = require('express')
const app = express.Router()
const serviceController = require('../../controller/service_controler/service_controller')

app.post('/service', serviceController.createService)
app.get('/service', serviceController.getAllService)
app.patch('/service/:id', serviceController.updateService)
app.delete('/service/:id', serviceController.deleteService)

module.exports = app