const campgroundsModel = require('app/models/campground')

const UpdateCampgroundsService = {
  perform (id, campground) {
    return new Promise((resolve, reject) => {
      campgroundsModel.findByIdAndUpdate(id, campground, { new: true })
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
