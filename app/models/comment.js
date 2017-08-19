const { mongoose, mongoSchema } = require('app/db/connect')

const authorRequired = [ true, 'The comment must have an author']
const textRequired = [ true, 'The comment must have a text']

const commentSchema = new mongoose.Schema({
  author: { type: String, required: authorRequired },
  text: { type: String, required: textRequired }
})

module.exports = mongoose.model('Comment', commentSchema)
