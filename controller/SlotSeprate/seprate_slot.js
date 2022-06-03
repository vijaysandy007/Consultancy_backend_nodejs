const getSeprateSchema = require('../../mongoose_schema/seprate_allocate')
const getEmployeeAllocate = require('../../mongoose_schema/employee_profile_alocate_slot')

const getAllocateList = async (req, res) => {
    const findSlots = await getEmployeeAllocate.find({ employee_id: req.params.id })

    const dateObj = new Date(req.body.date)

    const Myyear = dateObj.getUTCFullYear()
    const Mymonth = dateObj.getUTCMonth()
    const Mydate = dateObj.getUTCDate()

    const myDate = `${Myyear}-${formatDate(Mymonth)}-${formatDate(Mydate)}`
    var ResponseDate
    findSlots.forEach(date => {
        console.log(date.date)

        const resDateObj = new Date(date.date)
        const Responseyear = resDateObj.getUTCFullYear()
        const Responsemonth = resDateObj.getUTCMonth()
        const Responsedate = resDateObj.getUTCDate()

        ResponseDate = `${Responseyear}-${formatDate(Responsemonth)}-${formatDate(Responsedate)}`
        //   ResponseDate == myDate ? console.log('Correct') : console.log('Wrong');
    })

    // const myDate = findSlots.forEach(findDate =>{
    //    console.log(findDate.date)
    // })


    res.status(200).json({ data: findSlots })
}



module.exports = {
    getAllocateList
}

function formatDate(data) {
    return data < 10 ? `0${data}` : data
}