const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('landing')
})

app.get('/campgrounds', (req, res) => {
  const campgrounds = [
    { name: 'Salmon', image: 'http://www.nationalparks.nsw.gov.au/~/media/DF58734103EF43669F1005AF8B668209.ashx' },
    { name: 'Granite', image: 'http://www.fondulacpark.com/wp-content/uploads/2015/01/campground-pic-1.jpg' },
    { name: 'Mountain', image: 'https://img.hipcamp.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1440478008/campground-photos/csnhvxn0qcki2id5vxnc.jpg' }
  ]

  console.log(campgrounds);

  res.render('campgrounds', { campgrounds })
})

app.listen(3000, () => {
  console.log('the server has started')
})
