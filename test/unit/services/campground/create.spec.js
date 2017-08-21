const campgroundsModel = require('app/models/campground')
const CreateCampgroundsService = require('app/services/campground/create')
const campgroundMock = require('test/mocks/campground')

describe('Service Create Campground', () => {
  context('when the campground is added with success', () => {
    let result
    let campground = campgroundMock

    before(() => {
      sinon.stub(campgroundsModel, 'create').resolves(campground)
      CreateCampgroundsService.perform(campground)
        .then((campgroundAdded) => result = campgroundAdded)
    })


    after((done) => {
      campgroundsModel.create.restore()
      done()
    })

    it('will return the campground added', () => {
      expect(result).to.be.equal(campgroundMock)
    })
  })

  context('when the campground is added with error', () => {
    let result
    let campground = campgroundMock

    context('the error is a Validation Error',  () => {
      const error = {
        type: 'ValidationError',
        message: 'Campground validation failed: name: The campground must have a name'
      }

      before(() => {
        sinon.stub(campgroundsModel, 'create').rejects(error)

        CreateCampgroundsService.perform(campground)
        .catch((error) => result = error)
      })

      after((done) => {
        campgroundsModel.create.restore()
        done()
      })

      Object.assign(campground, { name: '' })

      it('will return the Validation Error', () => {
        expect(result).to.be.equal(error)
      })
    })

    context('the error is a Mongo Error',  () => {
      const error = {
        type: 'MongoError',
        message: 'failed to reconnect after 30 attempts with interval 1000 ms'
      }

      before(() => {
        sinon.stub(campgroundsModel, 'create').rejects(error)

        CreateCampgroundsService.perform(campground)
        .catch((error) => result = error)
      })

      after((done) => {
        campgroundsModel.create.restore()
        done()
      })

      it('will return the Mongo Error', () => {
        expect(result).to.be.equal(error)
      })
    })
  })
})
