const purposeSchema = require('../../mongoose_schema/purpose_schema')

const createPurpose = async (req, res) => {

    try {
        const purpose = await new purposeSchema({
            purpose_name: req.body.purpose_name,
            status:req.body.status
        })

        if (!purpose) {
            return res.status(400).send('Something went wrong')
        }
        await purpose.save()
        res.status(200).json({ data: purpose, message: 'Successfully created' })

    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllPurpose = async (req, res) => {
    try {
        const { page, limit } = req.body
        const skip = (page - 1) * limit
        const purpose = await purposeSchema.find({}, {}, { limit: limit, skip: skip })

        if (!purpose) {
            return res.status(400).send('Something went wrong')

        }
        res.status(200).json({ data: purpose, message: 'Successfully Fetched' })


    } catch (error) {
        res.status(500).send(error)

    }
}

const updatePurpose = async (req, res) => {

    try {
        const purpose = await purposeSchema.findByIdAndUpdate({ _id: req.params.id }, {
            purpose_name: req.body.purpose_name,
            status: req.body.status
        }, { new: true })

        if (!purpose) {
            return res.status(400).send('Something went wrong')
        }
        res.status(200).json({ data: purpose, message: 'Successfully Updated' })


    } catch (error) {
        res.status(500).send(error)

    }
}

const deletePurpose = async (req, res) => {
    try {
        const purpose = await purposeSchema.findByIdAndDelete({ _id: req.params.id }, { new: true })

        if (!purpose) {
            return res.status(400).send('Something went wrong')
        }

        const { page, limit } = req.body
        const skip = (page - 1) * limit
         
        const resetData = await purposeSchema.find({}, {}, { limit: limit, skip: skip })
        res.status(200).json({ data: resetData, message: 'Successfully Updated' })

    } catch (error) {
        res.status(500).send(error)

    }
}

module.exports = {
    createPurpose,
    getAllPurpose,
    updatePurpose,
    deletePurpose
}