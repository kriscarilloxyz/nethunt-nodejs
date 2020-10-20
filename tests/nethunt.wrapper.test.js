const { expect } = require('chai')
const Nethunt = require('../index')

describe('wrapper', () => {
  context('no username given', () => {
    it('throws error: Username cannot be blank', () => {
      expect(() => new Nethunt(false, 'password')).to.throw('Username cannot be blank')
    })
  })
  context('no password given', () => {
    it('throws error: Password cannot be blank', () => {
      expect(() => new Nethunt('username', false)).to.throw('Password cannot be blank')
    })
  })
  context('username and password given', () => {
    it('creates the wrapper', () => {
      expect(() => new Nethunt('username', 'password')).to.not.throw
    })
  })
})