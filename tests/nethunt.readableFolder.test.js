require('dotenv').config()
const { expect } = require('chai')
const Nethunt = require('../index')

describe('readableFolder', () => {
  const { TEST_USERNAME, TEST_PASSWORD } = process.env
  const clientInvalid = new Nethunt(true, true)
  const client = new Nethunt(TEST_USERNAME, TEST_PASSWORD)

  context('invalid credentials', () => {
    it('throws error', () => {
      clientInvalid.readableFolder()
        .catch(err => expect(err.body).to.equal('Your email address or API key does not appear to be valid'))
    })
  })

  context('valid credentials', () => {
    it('returns list of readable folders', () => {
      client.readableFolder()
        .then(response => expect(response).to.be.an('array'))
        .catch(err => expect(err.body).to.be.null)
    })
  })
})