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

    it('has option: headers', () => {
      const client = new Nethunt('username', 'password')
      expect(client.options).to.include.all.keys('headers')
    })

    it('has headers: Authorization', () => {
      const client = new Nethunt('username', 'password')
      expect(client.options.headers).to.include.all.keys('Authorization')
    })

    it('has headers: Content-Type', () => {
      const client = new Nethunt('username', 'password')
      expect(client.options.headers).to.include.all.keys('Content-Type')
    })

    it('authorization: is basic', () => {
      const client = new Nethunt('username', 'password')
      expect(client.options.headers.Authorization).to.have.string('Basic')
    })

    it('Content-Type: is application/json', () => {
      const client = new Nethunt('username', 'password')
      expect(client.options.headers['Content-Type']).to.equal('application/json')
    })


  })
})