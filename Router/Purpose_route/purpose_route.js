const express = require('express')
const app = express.Router()
const purposeController = require('../../controller/purpose_controller/purpose_controller')

app.post('/purpose', purposeController.createPurpose)
app.get('/purpose', purposeController.getAllPurpose)
app.patch('/purpose/:id', purposeController.updatePurpose)
app.delete('/purpose/:id', purposeController.deletePurpose)

module.exports = app