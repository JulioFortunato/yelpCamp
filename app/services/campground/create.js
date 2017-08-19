const { ValidationError } = require('app/constants').mongooseErrors
const campgroundsModel = require('app/models/campground')

const CreateCampgroundsService = {
  perform (campground) {
    return new Promise((resolve, reject) => {
      campgroundsModel.create(campground)
        .then((campgroundAdded) => {
          return resolve(campgroundAdded)
        })
        .catch((error) => {
          if (error instanceof ValidationError) {
            error.status = 422
          }

          if (error.name === 'MongoError') {
            error.status = 500
          }

          reject(error)
        })
    })
  }
}

module.exports = CreateCampgroundsService
