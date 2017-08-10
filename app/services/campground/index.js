const campgroundsModel = require('../../models/campground')

const ListCampgroundsService = {
  perform () {
    return new Promise((resolve, reject) => {
      campgroundsModel.find()
        .then((campgroundsList) => {
          return resolve(campgroundsList)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

module.exports = ListCampgroundsService
