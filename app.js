const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

let campgrounds = [
  { name: 'Salmon', image: 'http://www.nationalparks.nsw.gov.au/~/media/DF58734103EF43669F1005AF8B668209.ashx' },
  { name: 'Granite', image: 'http://www.fondulacpark.com/wp-content/uploads/2015/01/campground-pic-1.jpg' },
  { name: 'Mountain', image: 'https://img.hipcamp.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1440478008/campground-photos/csnhvxn0qcki2id5vxnc.jpg' }
]

app.get('/', (req, res) => {
  res.render('landing')
})

app.get('/campgrounds', (req, res) => {
  res.render('campgrounds', { campgrounds })
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
