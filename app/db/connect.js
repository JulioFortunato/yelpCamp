const mongoose = require('mongoose')
const mongoSchema = mongoose.Schema

mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })

module.exports = { mongoose, mongoSchema }
