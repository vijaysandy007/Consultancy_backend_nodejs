const getEmployeeAllocate = require('../../mongoose_schema/employee_profile_alocate_slot')
const moment = require('moment')

const getAllocateList = async (req, res) => {
  const findSlots = await getEmployeeAllocate.find({ employee_id: req.params.id })

  const dateObj = new Date(req.body.date)
  const Myyear = dateObj.getUTCFullYear()
  const Mymonth = dateObj.getUTCMonth()
  const Mydate = dateObj.getUTCDate()

  const myDate = `${Myyear}-${formatDate(Mymonth)}-${formatDate(Mydate)}`
  var ResponseDate;
  var FiteenResult = []
  var thirtyResult=[]
  findSlots.forEach(data => {
    const resDateObj = new Date(data.date)
    const Responseyear = resDateObj.getUTCFullYear()
    const Responsemonth = resDateObj.getUTCMonth()
    const Responsedate = resDateObj.getUTCDate()

    ResponseDate = `${Responseyear}-${formatDate(Responsemonth)}-${formatDate(Responsedate)}`

    data.alloacte.forEach(allocate => {
      const from = new Date(allocate.from)
      const to = new Date(allocate.to)
      const start = moment(from, 'YYYY-MM-DD hh:mm a')
      const end = moment(to, 'YYYY-MM-DD hh:mm a')
      start.minute(Math.ceil(start.minutes() / 15) * 15)

      // const thirtyStart =  moment(from, 'YYYY-MM-DD hh:mm a')
      // const thirtyEnd = moment(to, 'YYYY-MM-DD hh:mm a')

      start.minute(Math.ceil(start.minutes() / 15) * 15)

      while (start <= end) {
        FiteenResult.push(moment.utc(start))
        start.add(15, 'minutes');

      }
      return FiteenResult
      
    })
  })

  if (ResponseDate == myDate) {

    res.status(200).json({ data: FiteenResult })

  }
}


module.exports = {
  getAllocateList
}

function formatDate(data) {
  return data < 10 ? `0${data}` : data
}