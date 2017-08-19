const campgrounds = require('express').Router()
const controller = require('app/controllers/campground')

campgrounds.get('/campgrounds', controller.list)
campgrounds.post('/campgrounds', controller.create)
campgrounds.get('/campgrounds/:id', controller.read)
campgrounds.put('/campgrounds/:id', controller.update)
campgrounds.delete('/campgrounds/:id', controller.delete)

module.exports = campgrounds
