const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const Campground = require('./modules/campground')

mongoose.connect('mongodb://localhost/yelp_camp', { useMongoClient: true })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('view engine', 'ejs')


// Campground.create({
//   name: 'Salmon',
//   image: 'http://www.nationalparks.nsw.gov.au/~/media/DF58734103EF43669F1005AF8B668209.ashx',
//   description: 'The biggest campground with everything you need, like bugs and a lot of birds'
// }, (error, campground) => {
//      if (error) {
//         return console.log(error)
//       }
//
//       console.log(campground)
//    })
//
// Campground.create({
//   name: 'Granite',
//   image: 'http://www.fondulacpark.com/wp-content/uploads/2015/01/campground-pic-1.jpg',
//   description: 'Here you can find the truly peace, just an amazing place to take a nap'
// }, (error, campground) => {
//      if (error) {
//         return console.log(error)
//       }
//
//       console.log(campground)
//    })

app.get('/', (req, res) => {
  res.render('landing')
})

app.get('/campgrounds', (req, res) => {
  Campground.find({}, (error, campgrounds) => {
    if (error) {
      return console.log(error)
    }

    res.render('index', { campgrounds })
  })
})

app.post('/campgrounds', (req, res) => {
  const { name, image, description } = req.body

  Campground.create({ name, image, description }, (error, campground) => {
    if (error) {
      return console.log(error)
    }

    res.redirect('/campgrounds')
  })
})

app.get('/campgrounds/new', (req, res) => {
  res.render('new')
})

app.get('/campgrounds/:id', (req, res) => {
  Campground.findById(req.params.id, (error, campground) => {
      if (error) {
        return console.log(error)
      }

      res.render('show', { campground })
  })
})

app.listen(8000, () => {
  console.log('the server has started')
})
