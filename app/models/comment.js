const { mongoose, mongoSchema } = require('../db/connect')

const commentSchema = new mongoose.Schema({
  text: String,
  author: String,
})

module.exports = mongoose.model('Comment', commentSchema)
