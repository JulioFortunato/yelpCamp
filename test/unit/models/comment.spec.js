const commentMock = require('test/mocks/comment')

describe('Model Comment', () => {
  describe('author attribute', () => {
    context('when the author is empty', () => {
      it('will return the error message', () => {
        let comment = commentMock
        comment.author = '';

        const validation = comment.validateSync()

        expect(validation.errors.author.message).to.be.equal('The comment must have an author')
      })
    })

    context('when the author is valid', () => {
      it('will return undefined', () => {
        let comment = commentMock
        comment.author = 'TopGround'

        const validation = comment.validateSync()

        expect(validation).to.be.undefined
      })
    })
  })

  describe('text attribute', () => {
    context('when the text is empty', () => {
      it('will return the error message', () => {
        let comment = commentMock
        comment.text = '';

        const validation = comment.validateSync()

        expect(validation.errors.text.message).to.be.equal('The comment must have a text')
      })
    })

    context('when the text is valid', () => {
      it('will return undefined', () => {
        let comment = commentMock
        comment.text = 'TopGround'

        const validation = comment.validateSync()

        expect(validation).to.be.undefined
      })
    })
  })
})
