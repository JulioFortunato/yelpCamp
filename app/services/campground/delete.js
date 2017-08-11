const campgroundsModel = require('../../models/campground')
const DeleteCampgroundsService = {
  perform (id) {
    return new Promise((resolve, reject) => {
      campgroundsModel.findByIdAndRemove(id)
        .then((campground) => {
          return resolve(campground)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

module.exports = DeleteCampgroundsService
