require('dotenv').config()
const { expect } = require('chai')
const Nethunt = require('../index')

describe('newComment', () => {
  const { TEST_USERNAME, TEST_PASSWORD, TEST_FOLDERID } = process.env
  const clientInvalid = new Nethunt(true, true)
  const client = new Nethunt(TEST_USERNAME, TEST_PASSWORD)

  context('invalid credentials', () => {
    it('throws error', (done) => {
      clientInvalid.newComment()
        .catch(err => {
          expect(err.body).to.equal('Your email address or API key does not appear to be valid')
          done()
        })
    })
  })

  context('folderId is not given', () => {
    it('throws error', () => {
      expect(() => client.newComment()).to.throw
    })
  })

  context('valid credentials with no params', () => {
    it('returns list of new comments', (done) => {
      client.newComment(TEST_FOLDERID)
        .then(response => {
          expect(response).to.be.an('array')
          done()
        })
    })
  })

  context('valid credentials with params', () => {
    it('returns list of new comments', (done) => {
      client.newComment(TEST_FOLDERID, { created: 'today' })
        .then(response => {
          expect(response).to.be.an('array')
          done()
        })
    })
  })
})