require('dotenv').config()
const { expect } = require('chai')
const Nethunt = require('../index')

describe('nethunt', () => {
  const nethunt = new Nethunt(
    process.env.NETHUNT_USERNAME,
    process.env.NETHUNT_PASSWORD
  )

  it('accepts username', () => {
    expect(nethunt.username).to.equal(process.env.NETHUNT_USERNAME)
  })

  it('accepts password', () => {
    expect(nethunt.password).to.equal(process.env.NETHUNT_PASSWORD)
  })

  it('errors when no username', () => {
    expect(() => new Nethunt(false, 'password')).to.throw('Username cannot be blank')
  })

  it('errors when no password', () => {
    expect(() => new Nethunt('username', false)).to.throw('Password cannot be blank')
  })

  it('readableFolder', async () => {
    const res = await nethunt.readableFolder()
    expect(res).to.be.an('array')
  })

  it('writableFolder', async () => {
    const res = await nethunt.writableFolder()
    expect(res).to.be.an('array')
  })

  it('folderField', async () => {
    const res = await nethunt.folderField(
      process.env.NETHUNT_TEST_FOLDERID
    )
    expect(res).to.be.an('array')
  })

  it('findRecord', async () => {
    const res = await nethunt.findRecord()
  })

})