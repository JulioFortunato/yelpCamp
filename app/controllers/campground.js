const ListCampgroundsService = require('../services/campground/list')
const CreateCampgroundsService = require('../services/campground/create')
const ReadCampgroundService = require('../services/campground/read')
const UpdateCampgroundService = require('../services/campground/update')
const DeleteCampgroundService = require('../services/campground/delete')

const CampgroundController = {
  list (req, res) {
    ListCampgroundsService.perform()
      .then((campgrounds) => {
        res.status(200).json({ data: campgrounds })
      })
      .catch((error) => {
        console.log(error)
      })
  },

  create (req, res) {
    const campground = req.body

    CreateCampgroundsService.perform(campground)
      .then((campgroundAdded) => {
        res.status(201).json({ message: 'Campground added to database', data: campgroundAdded })
      })
      .catch((error) => {
        console.log(error)
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

  update (req, res) {
    const { id } = req.params
    const campground = req.body

    UpdateCampgroundService.perform(id, campground)
      .then((campgroundUpdated) => {
        res.status(200).json({ data: campgroundUpdated })
      })
      .catch((error) => {
        console.log(error)
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
