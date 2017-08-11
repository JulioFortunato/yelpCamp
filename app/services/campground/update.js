const campgroundsModel = require('../../models/campground')
const UpdateCampgroundsService = {
  perform (id, campground) {
    return new Promise((resolve, reject) => {
      campgroundsModel.findByIdAndUpdate(id, campground)
        .then((campgroundUpdated) => {
          return resolve(campgroundUpdated)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

module.exports = UpdateCampgroundsService
