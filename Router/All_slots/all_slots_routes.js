const express = require('express')
const app = express.Router()
const slotController = require('../../controller/all_slots/all_slots_controller')
require('dotenv').config()


app.post(`${process.env.ADMIN_ROUTE}/createSlot`, slotController.createSlots)
app.get(`${process.env.ADMIN_ROUTE}//getSlots`, slotController.getAllSlots)
app.put(`${process.env.ADMIN_ROUTE}/updateSlots/:id`, slotController.updateSlots);
app.delete(`${process.env.ADMIN_ROUTE}/allSlots/:id`, slotController.deletSlot);
app.put(`${process.env.ADMIN_ROUTE}/deleteNested/:id`, slotController.deleteNestedSlots)
module.exports = app