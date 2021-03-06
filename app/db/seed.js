const Campground = require('app/models/campground')
const Comment = require('app/models/comment')

const campgroundData = [
  {
    name: 'Salmons Creek',
    image: 'https://farm6.staticflickr.com/5479/11694969344_42dff96680.jpg',
    description: "Great place to go fishin' Bacon ipsum dolor amet kielbasa cow"
    },
  {
    name: 'Granite Hills',
    image: 'https://farm5.staticflickr.com/4103/5088123249_5f24c3202c.jpg',
    description: "It's just a hill.  Made of granite.  Nothing more! Cow doner."
    },
  {
    name: 'Wildwood Campground',
    image: 'https://farm5.staticflickr.com/4016/4369518024_0f64300987.jpg',
    description: 'All campsites.  All the time.Short ribs pastrami drumstick.'
    },
  {
    name: 'Lake Fooey',
    image: 'https://farm7.staticflickr.com/6138/6042439726_9efecf8348.jpg',
    description: 'Hills and lakes and lakes and hills.  Pork ribeye pork chop.'
    }
]

const commentData = [
  {
    text: 'This place is great',
    author: 'Homer'
    },
  {
    text: '. . .',
    author: 'Maggie'
    },
  {
    text: '*plays sax*',
    author: 'Lisa'
    },
  {
    text: 'Cowabunga',
    author: 'Bart'
  }
]

const seedDB = () => {
  Campground.remove({}, (error) => {
    if (error) {
      return console.log(error)
    }

    Comment.remove({}, (error) => {
      if (error) {
        return console.log(error)
      }

      campgroundData.forEach((campground, thisArg) => {
        Campground.create(campground, (error, campgroundAdded) => {
          if (error) {
            return console.log(error)
          }

          Comment.create(commentData[thisArg], (error, commentAdded) => {
            if (error) {
              return console.log(error)
            }

            campgroundAdded.comments.push(commentAdded)
            campgroundAdded.save()
          })
        })
      })
    })
  })
}

seedDB()

console.log('campgrounds added to database')
