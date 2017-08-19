const router = require('express').Router();
const campgroundRouter = require('app/routes/campground')

router.use('/', campgroundRouter)

module.exports = router
