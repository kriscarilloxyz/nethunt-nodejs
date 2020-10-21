require('dotenv').config()
const { expect } = require('chai')
const Nethunt = require('../index')

describe('updateRecord', () => {
  const { TEST_USERNAME, TEST_PASSWORD, TEST_RECORDID } = process.env
  const clientInvalid = new Nethunt(true, true)
  const client = new Nethunt(TEST_USERNAME, TEST_PASSWORD)


  context('invalid credentials', () => {
    it('throws error', (done) => {
      clientInvalid.updateRecord()
        .catch(err => {
          expect(err.body).to.throw
          done()
        })
    })
  })

  context('valid credentials', () => {
    it('creates a new comment', (done) => {
      client.updateRecord(TEST_RECORDID, {
        fieldActions: {
          name: {
            overwrite: true,
            add: "test"
          }
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
