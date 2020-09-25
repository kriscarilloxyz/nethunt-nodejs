const requestPromise = require('minimal-request-promise')

class Nethunt {
  constructor(username, password) {
    this.username = username
    this.password = password
    this.base64 = Buffer.from(username + ':' + password).toString('base64')
  }

  async readableFolder () {
    return requestPromise.get('https://nethunt.com/api/v1/zapier/triggers/readable-folder', {
      headers: {
        Authorization: `Basic ${this.base64}`
      }
    })
      .then(res => JSON.parse(res.body))
  }
  async writableFolder () {
    return requestPromise.get('https://nethunt.com/api/v1/zapier/triggers/writable-folder', {
      headers: {
        Authorization: `Basic ${this.base64}`
      }
    })
      .then(res => JSON.parse(res.body))
  }
  async folderField (folderId) {
    return requestPromise.get('https://nethunt.com/api/v1/zapier/triggers/folder-field/' + folderId, {
      headers: {
        Authorization: `Basic ${this.base64}`
      }
    })
      .then(res => JSON.parse(res.body))
  }
  async findRecord () { }
  async newRecord () { }
  async newComment () { }
  async updatedRecord () { }
  async recordChange () { }
  async createRecord () { }
  async createComment () { }
  async createCallLog () { }
  async updateRecord () { }
  async linkGmailThread () { }
  async authTest () { }
}

module.exports = Nethunt