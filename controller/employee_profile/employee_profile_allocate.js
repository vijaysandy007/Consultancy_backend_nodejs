const employee_allocate = require('../../mongoose_schema/employee_profile_alocate_slot')
const all_slots = require('../../mongoose_schema/all_slots')

const createAllocateByEmployee = async (req, res) => {
    try {

        const allSlots = await all_slots.findOne({ _id: req.params.id })

        if (!allSlots) {
            return req.status(400).json({ message: 'No Data Found Please check Slot ID' })
        }

        let myTestArry = [];
        allSlots.sessions.forEach(element => {
            myTestArry.push({ from: element.from, to: element.to })
        });

        const createAllocate = await employee_allocate.create({
            alloacte: myTestArry,
            date: req.body.date,
            slot_name: allSlots.slot_name,
            employee_id: req.body.employee_id
        })

        await createAllocate.save()
        res.status(200).json({ data: createAllocate })

    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllocateDate = async (req, res) => {
    try {
        const allocated = await employee_allocate.find({ employee_id: req.params.id })
        if (!allocated) {
            return res.status(400).send('Some Thing Went Wrong')
        }
        res.status(200).json({ data: allocated, message: "Allocated Fetched" })
    } catch (error) {
        res.status(400).send(error)

    }
}

const updateSlots = async (req, res) => {
    try {

        req.body.alloacte.forEach(async allocate => {
            const check = await employee_allocate.findOneAndUpdate({ 'alloacte._id': allocate._id }, {
                '$set': {
                    'alloacte.$.from': allocate.from,
                    'alloacte.$.to': allocate.to,
                    slot_name: req.body.slot_name
                }
            }, { new: true })
            res.status(200).json({ data: check, message: 'Updated' })
        })

    } catch (error) {
        res.status(500).send(error.error.message)
    }
}

const deleteAllocateSession = async (req, res) => {
    try {
        let deleteSlots
        req.body.allocate.forEach(async allocate => {

            deleteSlots = await employee_allocate.updateOne({ '_id': req.params.id }, { $pull: { "alloacte": { _id: allocate } } }, { multi: true })
        })
        const balanceData = await employee_allocate.find({ _id: req.params.id })
        res.status(200).json({ data: balanceData, message: 'Allocate Delted' })

    } catch (error) {
        res.status(500).send('Some Thing Went Wrong')
    }
}


module.exports = {
    createAllocateByEmployee,
    getAllocateDate,
    updateSlots,
    deleteAllocateSession
}