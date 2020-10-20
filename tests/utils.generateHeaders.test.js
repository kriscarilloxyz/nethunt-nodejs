const { expect } = require('chai')
const { generateHeaders } = require('../utils')

describe('generateHeaders', () => {
  context('no base64 given', () => {
    it('throws error: base64 cannot be blank', () => {
      expect(() => generateHeaders(false)).to.throw('Base64 cannot be blank')
    })
  })

  context('all params given', () => {
    it('contains headers as key', () => {
      const options = generateHeaders(true)
      expect(options).to.include.all.keys('headers')
    })

    it('headers: Authorization key', () => {
      const options = generateHeaders(true)
      expect(options.headers).to.include.all.keys('Authorization')
    })

    it('headers: Content-Type key', () => {
      const options = generateHeaders(true)
      expect(options.headers).to.include.all.keys('Content-Type')
    })

    it('headers: Authorization has Basic string in it', () => {
      const options = generateHeaders(true)
      expect(options.headers.Authorization).to.have.string('Basic')
    })

    it('headers: Content-Type is application/json', () => {
      const options = generateHeaders(true)
      expect(options.headers['Content-Type']).to.equal('application/json')
    })
  })
})