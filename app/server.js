const express = require('express')
const loadEnvironment = require('./load-environment')
const errorHandler = require('./error-handler')
const bodyParser = require('body-parser')
const router = require('./routes/router')

loadEnvironment()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', router)
app.use(errorHandler)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Listening on: ${PORT}`)
})
