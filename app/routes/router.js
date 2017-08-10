const router = require('express').Router();
const campgroundRouter = require('./campground')

router.use('/', campgroundRouter)

module.exports = router
