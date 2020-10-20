/**
 * Converts username and password
 * to base64 string for headers
 *
 * @param {*} username
 * @param {*} paswword
 * @returns {base64} string from username and passwords 
 */
function toBase64 (username, password) {
  if (!username) { throw Error('Username cannot be blank') }
  if (!password) { throw Error('Password cannot be blank') }

  return Buffer.from(username + ':' + password).toString('base64')
}

/**
 *
 *
 * @param {*} base64
 * @return {headers} object containg headers to be used in nethunt calls 
 */
function generateHeaders (base64) {
  if (!base64) { throw Error('Base64 cannot be blank') }
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${base64}`
    }
  }
}

module.exports = {
  toBase64,
  generateHeaders
}