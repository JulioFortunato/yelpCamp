const campgroundsModel = require('app/models/campground')
const ListCrampgroundService = require('app/services/campground/list')
const campgroundMock = require('test/mocks/campground')

describe('Service List Campground', () => {
  context('when the campgrounds are listed with success', () => {
    context('have campgrounds', () => {
      let result
      let campgrounds = [campgroundMock, campgroundMock]

      before(() => {
        sinon.stub(campgroundsModel, 'find').resolves(campgrounds)
        ListCrampgroundService.perform()
          .then((campgrounds) => result = campgrounds)
      })

      after((done) => {
        campgroundsModel.find.restore()
        done()
      })

      it('will return the list of campgrounds', () => {
        expect(result).to.be.deep.equal(campgrounds)
      })
    })

    context('do not have campgrounds', () => {
      let result
      let campgrounds = []

      before(() => {
        sinon.stub(campgroundsModel, 'find').resolves(campgrounds)
        ListCrampgroundService.perform()
          .then((campgrounds) => result = campgrounds)
      })

      after((done) => {
        campgroundsModel.find.restore()
        done()
      })

      it('will return an empty array', () => {
        expect(result).to.be.empty
      })
    })
  })
})
