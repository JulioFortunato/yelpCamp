const campgroundsModel = require('app/models/campground')
const UpdateCampgroundsService = require('app/services/campground/update')
const campgroundMock = require('test/mocks/campground')

describe('Service Create Campground', () => {
  context('when the campground is updated with success', () => {
    let result
    let campground = campgroundMock
    let id = '123'

    before(() => {
      sinon.stub(campgroundsModel, 'findByIdAndUpdate').resolves(campground)

      UpdateCampgroundsService.perform(id, campground)
        .then((campgroundUpdated) => result = campgroundUpdated)
    })

    after((done) => {
      campgroundsModel.findByIdAndUpdate.restore()
      done()
    })

    it('will return the campground added', () => {
      expect(result).to.be.deep.equal(campgroundMock)
    })
  })


  context('when the campground is updated with error', () => {
    let result
    let id = '123123'
    let campground = campgroundMock

    context('the campground is returned as null', () => {
      let id = '5991db7c2ae42d0046479992'

      before(() => {
        sinon.stub(campgroundsModel, 'findByIdAndUpdate').resolves(null)

        UpdateCampgroundsService.perform(id, campground)
          .then((campgroundUpdated) => result = campgroundUpdated)
      })

      after((done) => {
        campgroundsModel.findByIdAndUpdate.restore()
        done()
      })

      it('will return null', () => {
        expect(result).to.be.null
      })
    })

    context('the error is a Mongo Error',  () => {
      const error = {
        type: 'MongoError',
        message: 'failed to reconnect after 30 attempts with interval 1000 ms'
      }

      before(() => {
        sinon.stub(campgroundsModel, 'findByIdAndUpdate').rejects(error)

        UpdateCampgroundsService.perform(id, campground, { new: true })
        .catch((error) => result = error)
      })

      after((done) => {
        campgroundsModel.findByIdAndUpdate.restore()
        done()
      })

      it('will return the Mongo Error', () => {
        expect(result).to.be.equal(error)
      })
    })

    context('the error is a Cast Error',  () => {
      const error = {
        type: 'CastError',
        message: 'Cast to ObjectId failed for value \"123\" at path \"_id\" for model \"Campground\"'
      }

      before(() => {
        sinon.stub(campgroundsModel, 'findByIdAndUpdate').rejects(error)

        UpdateCampgroundsService.perform(id, campground, { new: true })
        .catch((error) => result = error)
      })

      after((done) => {
        campgroundsModel.findByIdAndUpdate.restore()
        done()
      })

      it('will return the Mongo Error', () => {
        expect(result).to.be.equal(error)
      })
    })
  })
})
