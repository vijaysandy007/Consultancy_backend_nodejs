const allSlotsSchema = require('../../mongoose_schema/all_slots');

const createSlots = async (req, res) => {

    try {
        const slots = await new allSlotsSchema(req.body);
        if (!slots) {
            return res.status(400).send('Slots Cannot be Created')
        }
        await slots.save();

        res.status(200).json({ data: slots, message: 'Succesfully created' })

    } catch (error) {
        res.status(500).send(error)

    }
}

const getAllSlots = async (req, res) => {
    try {
        const { page, limit } = req.body
        const skip = (page - 1) * limit
        const slots = await allSlotsSchema.find({}, {}, { limit: limit, skip: skip })
        const count = await allSlotsSchema.find().count()

        if (!page) {
            return res.status(400).json({ message: 'Cannot Find Page in body' })
        }
        if (!limit) {
            return res.status(400).json({ message: 'Cannot Find Page in limit' })
        }

        res.status(200).json({ count: count, data: slots, message: 'Slots Fetched' })

    } catch (error) {
        res.status(500).send(error)

    }
}

const updateSlots = async (req, response) => {
    try {
        const myArray = [];
        myArray.push(await req.body)
        myArray.forEach(async responseBody => {
            responseBody.sessions.forEach(async session => {
                if (session._id) {
                    const check = await allSlotsSchema.findOneAndUpdate({ 'sessions._id': session._id }, {
                        '$set': {
                            'sessions.$.from': session.from,
                            'sessions.$.to': session.to,
                            slot_name: req.body.slot_name
                        }
                    }, { new: true })
                    console.log(check)
                    response.status(200).json({ data: check, message: 'Updated' })
                }
            })
        })

    } catch (error) {
        res.status(500).send(error)
    }
}

const deletSlot = async (req, ressponse) => {
    try {
        const deleteSlots = await allSlotsSchema.findByIdAndDelete({ _id: req.params.id }, { new: true })

        if (!deleteSlots) {
            return ressponse.status(400).send('Something went wrong')
        }
        ressponse.status(200).json({ data: deleteSlots, message: 'Solt has been Deleted' })

    } catch (error) {
        ressponse.status(500).send(error)
    }
}

const deleteNestedSlots = async (req, res) =>{
    try {
        const sessionId = req.body.sessions._id
        const deleteSlots = await allSlotsSchema.updateOne({'_id': req.params.id}, {$pull: {"sessions": {_id: sessionId}}}, {multi:true})

        if(!deleteSlots){
        return  res.status(400).send('Something went wrong')
          
        }
          const getData = await allSlotsSchema.findOne({_id: req.params.id})
       
              res.status(200).json({data: getData, message: "Succesfuly deleted Nested slots"})


    } catch (error) {
        res.status(500).send(error)
        
    }
}

module.exports = {
    createSlots,
    getAllSlots,
    updateSlots,
    deletSlot,
    deleteNestedSlots
}