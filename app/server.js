require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes/router')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', router)
app.use(express.static('public'))

app.set('view engine', 'ejs')

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Listening on: ${PORT}`)
})
