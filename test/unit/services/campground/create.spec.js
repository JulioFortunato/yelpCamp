const campgroundsModel = require('../../../../app/models/campground')
const CreateCampgroundsService = require('../../../../app/services/campground/create')
const campgroundMock = require('../../../mocks/campground')

describe('Service Create Campground', () => {
  context('when the campground is added with success', () => {
    let result

    before(() => {
      sinon.stub(campgroundsModel, 'create').resolves(campgroundMock)
      CreateCampgroundsService.perform(campgroundMock)
        .then((campgroundAdded) => result = campgroundAdded)
    })


    after((done) => {
      campgroundsModel.create.restore()
      done()
    })

    it('return the campground added', () => {
      expect(result).to.be.equal(campgroundMock)
    })
  })

  context('when the campground is added with error', () => {
    let result
    const error = { message: 'Campground validation failed: name: The campground must have a name' }
    const campground = Object.assign(campgroundMock, { name: '' })

    before(() => {
      sinon.stub(campgroundsModel, 'create').rejects(error)

      CreateCampgroundsService.perform(campground)
        .catch((error) => result = error)
    })

    after((done) => {
      campgroundsModel.create.restore()
      done()
    })

    it('return the error', () => {
      expect(result).to.be.equal(error)
    })
  })
})
