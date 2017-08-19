const CampgroundModel = require('app/models/campground')

const Campground = new CampgroundModel({
  name: 'Topground',
  image: 'http://img1.sunset.timeinc.net/sites/default/files/styles/1000x1000/public/image/2016/10/main/hoodview-campground-0510.jpg?itok=B8Eb65Uf',
  description: 'Is an outdoor activity involving overnightstays away from home in a shelter, such as a tent, a caravan, or a motorhome. Generally participants leave developed areas to spend time outdoors in more natural ones in pursuit of activities providing them enjoyment. To be regarded as "camping" a minimum of one night is spent outdoors, distinguishing it from day-tripping, picnicking, and other similarly short-term recreational activities. Camping can be enjoyed through all seasons.',
})

module.exports = Campground
