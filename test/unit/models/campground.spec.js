const campgroundMock = require('../../mocks/campground')
const commentMock = require('../../mocks/comment')

describe('Model Campground', () => {
  describe('name attribute', () => {
    context('when the name is empty', () => {
      it('will return the error message', () => {
        let campground = campgroundMock
        campground.name = '';

        const validation = campground.validateSync()

        expect(validation.errors.name.message).to.be.equal('The campground must have a name')
      })
    })

    context('when the name is valid', () => {
      it('will return undefined', () => {
        let campground = campgroundMock
        campground.name = 'TopGround'

        const validation = campground.validateSync()

        expect(validation).to.be.undefined
      })
    })
  })

  describe('image attribute', () => {
    context('when the image is empty', () => {
      it('will return the error message', () => {
        let campground = campgroundMock
        campground.image = '';

        const validation = campground.validateSync()

        expect(validation.errors.image.message).to.be.equal('The campground must have an image')
      })
    })

    context('when the image is valid', () => {
      it('will return undefined', () => {
        let campground = campgroundMock
        campground.image = 'TopGround'

        const validation = campground.validateSync()

        expect(validation).to.be.undefined
      })
    })
  })

  describe('description attribute', () => {
    context('when the description is empty', () => {
      it('will return the error message', () => {
        let campground = campgroundMock
        campground.description = '';

        const validation = campground.validateSync()

        expect(validation.errors.description.message).to.be.equal('The campground must have a description')
      })
    })

    context('when the description is valid', () => {
      it('will return undefined', () => {
        let campground = campgroundMock
        campground.description = 'TopGround'

        const validation = campground.validateSync()

        expect(validation).to.be.undefined
      })
    })
  })

  describe('comment attribute', () => {
    context('when the comment is added', () => {
      it('will return undefined', () => {
        let campground = campgroundMock
        campground.comments = [commentMock]

        const validation = campground.validateSync()

        expect(validation).to.be.undefined
      })
    })
  })
})
