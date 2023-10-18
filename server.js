const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const instructor = require('./routes/adminRoute')
const course = require('./routes/courseRoute')


mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("DB connection successfull")
}).catch(err=>{
    console.log(err)
    
})


app.use(express.json())

app.use(cors())
app.use('/admin',instructor)
app.use('/',course)

const port = process.env.PORT || 8080

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})





