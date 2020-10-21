require('dotenv').config()
const { expect } = require('chai')
const Nethunt = require('../index')

describe('createCallLog', () => {
  const { TEST_USERNAME, TEST_PASSWORD, TEST_RECORDID } = process.env
  const clientInvalid = new Nethunt(true, true)
  const client = new Nethunt(TEST_USERNAME, TEST_PASSWORD)


  context('invalid credentials', () => {
    it('throws error', (done) => {
      clientInvalid.createCallLog()
        .catch(err => {
          expect(err.body).to.throw
          done()
        })
    })
  })

  context('valid credentials', () => {
    it('creates a new comment', (done) => {
      client.createCallLog(TEST_RECORDID, {
        text: "It's a call log",
        time: "2015-01-01T12:35:00Z",
        duration: 2.5
      })
        .then(response => {
          expect(response).to.be.an('object')
          done()
        })
        .catch(err => done(err))
    })
  })
})
