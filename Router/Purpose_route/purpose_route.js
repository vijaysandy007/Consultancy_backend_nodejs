const express = require('express')
const app = express.Router()
const purposeController = require('../../controller/purpose_controller/purpose_controller')
require('dotenv').config()

app.post(`${process.env.ADMIN_ROUTE}/purpose`, purposeController.createPurpose)
app.get(`${process.env.ADMIN_ROUTE}/purpose`, purposeController.getAllPurpose)
app.patch(`${process.env.ADMIN_ROUTE}/purpose/:id`, purposeController.updatePurpose)
app.delete(`${process.env.ADMIN_ROUTE}/purpose/:id`, purposeController.deletePurpose)

module.exports = app