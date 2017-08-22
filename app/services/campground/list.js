const campgroundsModel = require('app/models/campground')

const ListCampgroundsService = {
  perform () {
    return new Promise((resolve, reject) => {
      campgroundsModel.find()
        .then((campgroundsList) => {
          return resolve(campgroundsList)
        })
        .catch((error) => {
          if (error.name === 'MongoError') {
            error.status = 500
          }

          reject(error)
        })
    })
  }
}

module.exports = ListCampgroundsService
