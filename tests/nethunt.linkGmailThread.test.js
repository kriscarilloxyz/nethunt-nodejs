require('dotenv').config()
const { expect } = require('chai')
const Nethunt = require('../index')

describe('linkGmailThread', () => {
  const { TEST_USERNAME, TEST_PASSWORD, TEST_FOLDERID } = process.env
  const clientInvalid = new Nethunt(true, true)
  const client = new Nethunt(TEST_USERNAME, TEST_PASSWORD)


  context('invalid credentials', () => {
    it('throws error', (done) => {
      clientInvalid.linkGmailThread()
        .catch(err => {
          expect(err.body).to.throw
          done()
        })
    })
  })

  context('valid credentials', () => {
    it('creates a new link gmail thread', (done) => {
      client.linkGmailThread(TEST_FOLDERID, {
        gmailThreadId: "1234567890abcdef"
      })
        .catch(err => {
          // Expect throw an error since gmailThreadId doesn't exist 
          expect(err).to.throw
          done()
        })
    })
  })
})
