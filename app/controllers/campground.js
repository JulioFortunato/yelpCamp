const { ValidationError } = require('app/constants').mongooseErrors

const ListCampgroundsService = require('app/services/campground/list')
const CreateCampgroundsService = require('app/services/campground/create')
const ReadCampgroundService = require('app/services/campground/read')
const UpdateCampgroundService = require('app/services/campground/update')
const DeleteCampgroundService = require('app/services/campground/delete')

const CampgroundController = {
  list (req, res, next) {
    ListCampgroundsService.perform()
      .then((campgrounds) => {
        res.status(200).json({ data: campgrounds })
      })
      .catch((error) => {
        if (error.name === 'MongoError') {
          error.status = 500
        }

        next(error)
      })
  },

  create (req, res, next) {
    const campground = req.body

    CreateCampgroundsService.perform(campground)
      .then((campgroundAdded) => {
        res.status(201).json({ message: 'Campground added to database', data: campgroundAdded })
      })
      .catch((error) => {
        if (error instanceof ValidationError) {
          error.status = 422
        }

        if (error.name === 'MongoError') {
          error.status = 500
        }

        next(error)
      })
  },

  read (req, res) {
    const { id } = req.params

    ReadCampgroundService.perform(id)
      .then((campground) => {
        res.status(200).json({ data: campground })
      })
      .catch((error) => {
        console.log(error)
      })
  },

  update (req, res, next) {
    const { id } = req.params
    const campground = req.body

    UpdateCampgroundService.perform(id, campground)
      .then((campgroundUpdated) => {
        if (!campgroundUpdated) {
          const error = { status: 404, message: 'This campground do not exist' }

          return next(error)
        }

        res.status(200).json({ data: campgroundUpdated })
      })
      .catch((error) => {
        if (error.name === 'CastError') {
          error.status = 404
          error.message = 'This campground do not exist'
        }

        if (error.name === 'MongoError') {
          error.status = 500
        }

        next(error)
      })
  },

  delete (req, res) {
    const { id } = req.params

    DeleteCampgroundService.perform(id)
      .then((campground) => {
        res.status(204).json({})
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

module.exports = CampgroundController
