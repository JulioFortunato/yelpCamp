const { STATUS_CODES } = require('http')
const { statusCodes } = require('app/constants')

module.exports = (error, req, res, next) => {
  const status = error.status || 500
  const type = error.name || STATUS_CODES[status]
  const message = error.message || ''

  console.log(error)

  res.status(status).json({
    error: { type, message }
  })
}
