const campgrounds = require('express').Router()
const controller = require('../controllers/campground')

campgrounds.get('/campgrounds', controller.index)
campgrounds.post('/campgrounds', controller.create)
campgrounds.get('/campgrounds/:id', controller.read)
campgrounds.put('/campgrounds/:id', controller.update)
campgrounds.delete('/campgrounds/:id', controller.delete)

module.exports = campgrounds
