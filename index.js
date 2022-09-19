const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const colorRoute = require('./routes/color')

const app = express()
const PORT = process.env.PORT || 4000

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/api/color', colorRoute)

// connect to mongoose 
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true }
).then(() => {
  console.log('Connected to mongodb atlas')
}).catch(err => {
  console.log(`Error occured ${err}`)
})

// start server
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)
})