const express = require('express')
const app = new express()
const router = require('./routes/api')

const dotenv = require('dotenv')
dotenv.config({APP_PORT: true})
const APP_PORT = process.env.APP_PORT || '3000'

const morgan = require('morgan')

app.use(morgan('tiny'))
app.use(express.json())
app.use('/api', router)

app.listen(APP_PORT, () => {
    console.log('Listening: localhost: ' + APP_PORT)
})

