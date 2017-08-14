const { mongoose, mongoSchema } = require('../db/connect')


const nameRequired = [true, 'The campground must have a name']
const imageRequired = [true, 'The campground must have an image']
const descriptionRequired = [true, 'The campground must have a description']

const campgroundSchema = new mongoSchema({
  name: { type: String, trim: true, required: nameRequired },
  image: { type: String, trim: true, required: imageRequired },
  description: { type: String, trim: true, required: descriptionRequired},
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
})

module.exports = mongoose.model('Campground', campgroundSchema)
