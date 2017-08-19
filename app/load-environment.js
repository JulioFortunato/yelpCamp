module.exports = () => process.env.YELPCAMP ? 0 : require('dotenv').config()
