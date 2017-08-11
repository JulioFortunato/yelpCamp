const ListCampgroundsService = require('../services/campground/index')
const CreateCampgroundsService = require('../services/campground/create')
const ReadCampgroundService = require('../services/campground/read')
const DeleteCampgroundService = require('../services/campground/delete')

const CampgroundController = {
  index (req, res) {
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
      .then((campground) => {
        res.status(201).json({ message: 'Campground added to database', data: campground })
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
