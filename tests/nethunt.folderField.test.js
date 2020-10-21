require('dotenv').config()
const { expect } = require('chai')
const Nethunt = require('../index')

describe('folderField', () => {
  const { TEST_USERNAME, TEST_PASSWORD, TEST_FOLDERID } = process.env
  const clientInvalid = new Nethunt(true, true)
  const client = new Nethunt(TEST_USERNAME, TEST_PASSWORD)

  context('invalid credentials', () => {
    it('throws error', (done) => {
      clientInvalid.folderField()
        .catch(err => {
          expect(err.body).to.equal('Your email address or API key does not appear to be valid')
          done()
        })
    })
  })

  context('folderId is not given', () => {
    it('throws error', () => {
      expect(() => client.folderField()).to.throw
    })
  })

  context('valid credentials', () => {
    it('returns list of folder fields', (done) => {
      client.folderField(TEST_FOLDERID)
        .then(response => {
          expect(response).to.be.an('array')
          done()
        })
    })
  })
})