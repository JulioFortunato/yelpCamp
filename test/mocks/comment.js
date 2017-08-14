const CommentModel = require('../../app/models/comment')

const Comment = new CommentModel({
  author: 'Top guy',
  text: 'this is really top dude!'
})

module.exports = Comment
