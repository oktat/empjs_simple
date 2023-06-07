const express = require('express')
const app = new express()
const router = require('./routes/api')
const morgan = require('morgan')
require('dotenv').config()
const PORT = process.env.APP_PORT || 8000
 
app.use(morgan('combined'))
app.use(express.json())
app.use('/api', router)
 
app.listen(PORT, () => {
    console.log(`Listening localhost: ${PORT}`)
})