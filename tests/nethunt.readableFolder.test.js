require('dotenv').config()
const { expect } = require('chai')
const Nethunt = require('../index')

describe('readableFolder', () => {
  const { TEST_USERNAME, TEST_PASSWORD } = process.env
  const clientInvalid = new Nethunt(true, true)
  const client = new Nethunt(TEST_USERNAME, TEST_PASSWORD)

  context('invalid credentials', () => {
    it('throws error', (done) => {
      clientInvalid.readableFolder()
        .catch(err => {
          expect(err.body).to.equal('Your email address or API key does not appear to be valid')
          done()
        })
    })
  })

  context('valid credentials', () => {
    it('returns list of readable folders', (done) => {
      client.readableFolder()
        .then(response => {
          expect(response).to.be.an('array')
          done()
        })
    })
  })
})