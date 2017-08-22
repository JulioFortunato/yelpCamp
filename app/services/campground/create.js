const campgroundsModel = require('app/models/campground')

const CreateCampgroundsService = {
  perform (campground) {
    return new Promise((resolve, reject) => {
      campgroundsModel.create(campground)
        .then((campgroundAdded) => {
          return resolve(campgroundAdded)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

module.exports = CreateCampgroundsService
