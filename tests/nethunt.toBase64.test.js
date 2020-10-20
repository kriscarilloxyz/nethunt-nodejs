const { expect } = require('chai')
const { toBase64 } = require('../index')

describe('toBase64', () => {
  context('no username given', () => {
    it('throws error: Username cannot be blank', () => {
      expect(() => toBase64(false, 'password')).to.throw('Username cannot be blank')
    })
  })
  context('no password given', () => {
    it('throws error: Password cannot be blank', () => {
      expect(() => toBase64('username', false)).to.throw('Password cannot be blank')
    })
  })

  context('username and password given', () => {
    it('has only base64 chars', () => {
      const result = toBase64('a', 'b')
      expect(/[A-Za-z0-9+/=]/.test(result)).to.be.true
    })
  })
})