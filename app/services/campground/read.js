const campgroundsModel = require('../../models/campground')
const ReadCampgroundsService = {
  perform (id) {
    return new Promise((resolve, reject) => {
      campgroundsModel.findById(id)
        .then((campground) => {
          return resolve(campground)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

module.exports = ReadCampgroundsService
