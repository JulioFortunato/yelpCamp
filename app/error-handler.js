const { STATUS_CODES } = require('http')
const { statusCodes } = require('app/constants')

module.exports = (err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || STATUS_CODES[status]
  const type = err.name

  console.error(err)

  res.status(status).json({
    error: { type, message }
  })
}
