const requestPromise = require('minimal-request-promise')
const querystring = require('querystring')

/**
*  Nethunt client
*  @param {string} username - Nethunt username
*  @param {string} password - Nethunt password 
*/
class Nethunt {
  /**
  *   Creates a new nethunt client and turns credentials
  *   to base64 for basic auth Authorization header
  *   @param {string} username - Nethunt username
  *   @param {string} password - Nethunt password 
  *   @returns {string} this.username - Nethunt username
  *   @returns {string} this.password - Nethunt password
  *   @returns {Buffer} this.base64 - Base64 encoded username and password
  */
  constructor(username, password) {
    this.username = username
    this.password = password
    this.base64 = Buffer.from(username + ':' + password).toString('base64')
  }

  /** 
  * List all accessible folders 
  * @example [
  *      {
  *          "id": "596f644b8f6d05e16c24b810",
  *          "name": "My first folder"
  *      },
  *      {
  *          "id": "596f644b8f6d05e16c24b811",
  *          "name": "My second folder"
  *      }
  *  ]
  * @returns {Array} List of readable folders
  */
  async readableFolder () {
    return requestPromise.get('https://nethunt.com/api/v1/zapier/triggers/readable-folder', {
      headers: {
        Authorization: `Basic ${this.base64}`
      }
    })
      .then(res => JSON.parse(res.body))
  }

  /** 
  * List folders which the user can create records in
  * @return {Array} Array of folders which the user can create records in
  * @example  [
  *    {
  *        "id": "596f644b8f6d05e16c24b810",
  *        "name": "My first folder"
  *    },
  *    {
  *        "id": "596f644b8f6d05e16c24b811",
  *        "name": "My second folder"
  *    }
  *  ]
  */
  async writableFolder () {
    return requestPromise.get('https://nethunt.com/api/v1/zapier/triggers/writable-folder', {
      headers: {
        Authorization: `Basic ${this.base64}`
      }
    })
      .then(res => JSON.parse(res.body))
  }

  /**
   * List folder fields
   * @param  {string} folderId - Folder ID to list fields 
   * @return {Array} 
   */
  async folderField (folderId) {
    return requestPromise.get('https://nethunt.com/api/v1/zapier/triggers/folder-field/' + folderId, {
      headers: {
        Authorization: `Basic ${this.base64}`
      }
    })
      .then(res => JSON.parse(res.body))
  }

  /**
   *
   *
   * @param {*} folderId
   * @param {*} params
   * @return {*} 
   * @memberof Nethunt
   */
  async findRecord (folderId, params) {
    return requestPromise.get(
      `https://nethunt.com/api/v1/zapier/searches/find-record/${folderId}?${querystring.stringify(params)}`, {
      headers: {
        Authorization: `Basic ${this.base64}`
      }
    })
      .then(res => JSON.parse(res.body))
  }

  async createCallLog () { }
  async updateRecord () { }
  async linkGmailThread () { }
  async authTest () { }
}

module.exports = Nethunt