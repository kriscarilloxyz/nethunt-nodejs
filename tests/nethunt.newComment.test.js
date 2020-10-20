require('dotenv').config()
const { expect } = require('chai')
const Nethunt = require('../index')

describe('newComment', () => {
  const { TEST_USERNAME, TEST_PASSWORD, TEST_FOLDERID } = process.env
  const clientInvalid = new Nethunt(true, true)
  const client = new Nethunt(TEST_USERNAME, TEST_PASSWORD)

  context('invalid credentials', () => {
    it('throws error', () => {
      clientInvalid.newComment()
        .catch(err => expect(err.body).to.equal('Your email address or API key does not appear to be valid'))
    })
  })

  context('folderId is not given', () => {
    it('throws error', () => {
      expect(() => client.newComment()).to.throw
    })
  })

  context('valid credentials with no params', () => {
    it('returns list of folder fields', () => {
      client.newComment(TEST_FOLDERID)
        .catch(err => expect(err.body).to.be.equal(
          'Please enter either Record ID or Search Query'))
    })
  })

  context('valid credentials with params', () => {
    it('returns list of folder fields', () => {
      client.newComment(TEST_FOLDERID, { created: 'today' })
        .then(response => expect(response).to.be.an('array'))
        .catch(err => expect(err.body).to.be.null)
    })
  })
})