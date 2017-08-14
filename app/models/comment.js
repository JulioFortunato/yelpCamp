const { mongoose, mongoSchema } = require('../db/connect')
const textRequired = [ true, 'The comment should have a text']
const authorRequired = [ true, 'The comment should have an author']

const commentSchema = new mongoose.Schema({
  text: { type: String, required: textRequired },
  author: { type: String, required: authorRequired },
})

module.exports = mongoose.model('Comment', commentSchema)
