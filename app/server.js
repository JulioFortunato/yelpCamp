const express = require('express')
const loadEnvironment = require('app/load-environment')
const errorHandler = require('app/error-handler')
const router = require('app/routes/router')
const bodyParser = require('body-parser')

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
