const mongoose = require('mongoose')

const slots = new mongoose.Schema({
    slot_name: {
        type: String,
        required: true
    },

    sessions: [
        {
            from: String,
            to: String,
        }
    ]
});

const exportSlots = mongoose.model('All_Slots', slots)

module.exports = exportSlots;