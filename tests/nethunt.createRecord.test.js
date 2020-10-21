require('dotenv').config()
const { expect } = require('chai')
const Nethunt = require('../index')

describe('createRecord', () => {
  const { TEST_USERNAME, TEST_PASSWORD, TEST_FOLDERID } = process.env
  const clientInvalid = new Nethunt(true, true)
  const client = new Nethunt(TEST_USERNAME, TEST_PASSWORD)


  context('invalid credentials', () => {
    it('throws error', (done) => {
      clientInvalid.createRecord()
        .catch(err => {
          expect(err.body).to.throw
          done()
        })
    })
  })

  context('valid credentials', () => {
    it('creates a new record', (done) => {
      client.createRecord(TEST_FOLDERID, {
        timeZone: 'Europe/London',
        fields: {
          name: 'test'
        }
      })
        .then(response => {
          expect(response).to.be.an('object')
          done()
        })
        .catch(err => done(err))
    })
  })
})
