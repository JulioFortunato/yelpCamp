const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost/yelp_camp', { useMongoClient: true })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('view engine', 'ejs')

//schema
const campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
})

const Campground = mongoose.model('Campground', campgroundSchema)

Campground.create({
  name: 'Salmon',
  image: 'http://www.nationalparks.nsw.gov.au/~/media/DF58734103EF43669F1005AF8B668209.ashx'
}, (error, campground) => {
     if (error) {
        return console.log(error)
      }

      console.log(campground)
   })

Campground.create({
  name: 'Granite',
  image: 'http://www.fondulacpark.com/wp-content/uploads/2015/01/campground-pic-1.jpg'
}, (error, campground) => {
     if (error) {
        return console.log(error)
      }

      console.log(campground)
   })

app.get('/', (req, res) => {
  res.render('landing')
})

app.get('/campgrounds', (req, res) => {
  Campground.find({}, (error, campgrounds) => {
    if (error) {
      return console.log(error)
    }

    res.render('campgrounds', { campgrounds })
  })
})

app.post('/campgrounds', (req, res) => {
  const { name, image } = req.body
  const campground = { name, image }

  campgrounds = [ ...campgrounds, campground ]

  res.redirect('/campgrounds')
})

app.get('/campgrounds/new', (req, res) => {
  res.render('new')
})

app.listen(8000, () => {
  console.log('the server has started')
})
