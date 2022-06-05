const express = require('express')
const router = express.Router();
const getSeparte = require('../../controller/SlotSeprate/seprate_slot')
require('dotenv').config()

router.get(`${process.env.USER_ROUTE}/getseprateSlot/:id`, getSeparte.getAllocateList)

module.exports = router