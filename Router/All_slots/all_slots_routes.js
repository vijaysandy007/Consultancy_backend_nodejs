const express = require('express')
const app = express.Router()
const slotController = require('../../controller/all_slots/all_slots_controller')


app.post('/createSlot', slotController.createSlots)
app.get('/getSlots', slotController.getAllSlots)
app.put('/updateSlots/:id', slotController.updateSlots);
app.delete('/allSlots/:id', slotController.deletSlot);
app.put('/deleteNested/:id', slotController.deleteNestedSlots)
module.exports = app