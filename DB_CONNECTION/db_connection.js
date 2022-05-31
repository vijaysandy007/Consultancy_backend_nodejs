const mongoose = require('mongoose');
require('dotenv').config()

const db = mongoose.connect(process.env.DB_CONNECTION_URL, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log('db connected')
}, (error)=>{
    console.log(`DB not connected ${error}`)

})

module.exports = db

