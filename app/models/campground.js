const { mongoose, mongoSchema } = require('../db/connect')

const campgroundSchema = new mongoSchema({
  name: String,
  image: String,
  description: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
})

module.exports = mongoose.model('Campground', campgroundSchema)
