# nethunt-js

nethunt-js is a wrapper for https://nethunt.com/integration-api

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install nethunt-js.

```bash
npm i @kriscarilloxyz/nethunt-js
```

## Usage

```javascript
const Nethunt = require('@kriscarilloxyz/nethunt-js')

const client = new Nethunt(username, password) 
const readableFolders = await client.readableFolders()
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Requirements

Nethunt JS will be a wrapper for nethunt api integration. The goal is to make nethunt API easily accessible in node.js

1. **Wrapper**
   1. params username and password
   2. Inject `base64` in constructor using provided username and password
   3. **List all accessible folders**
      1. GET `/triggers/readable-folder`
   4. **List folders which the user can create records in**
      1. GET `/triggers/writable-folder`
   5. **List folder fields**
         1. GET `/triggers/folder-field/{folderId}`
         2. params: `folderId`
   6. **Find records by ID or text query**
      1. GET `/searches/find-record/{folderId}?recordId={recordId}&query={query}&limit={limit}`
         1. params: `folderId`
         2. optional params: `recordId`, `query`, `limit`
   7. **Find recently created records**
      1. GET `/triggers/new-record/{folderId}?since={since}&limit={limit}`
         1. params: `folderId`	
         2. optional params: `since`, `limit`
   8. **Find recently created record comments**
      1. GET `/triggers/new-comment/{folderId}?since={since}&limit={limit}`
         1. params: `folderId`
         2. optional params: `since`, `limit`
   9. **Find recently updated records**
      1.  GET `/triggers/updated-record/{folderId}?fieldName={fieldName}&since={since}&limit={limit}`
          1.  params: `folderId`
          2.  optional params: `fieldName`, `since`, `limit`
  1.  **Find recent record changes** 
      1.  GET `/triggers/record-change/{folderId}?recordId={recordId}&fieldName={fieldName}&since={since}&limit={limit}`
          1.  params: `folderId`
          2.  optional params: `fieldName`, `since`, `limit`
  2.  **Create a new record**
      1.  POST `/actions/create-record/{folderId}`
          1.  params: `folderId`, `timeZone`, `fields`
  3.  **Create a new record comment**
      1.  POST `/actions/create-comment/{recordId}`
          1.  params: **recordId**, **text**
  4.  **Create a new record call log**
      1.  POST `/actions/create-call-log/{recordId}`
          1.  params: `recordId`, `text`
          2.  optonal params: `time`, `duration`
  5.  **Update a record**
      1.  POST `/zapier/actions/update-record/{recordId}?overwrite={overwrite}`
          1.  params: `recordId`, `fieldActions`
          2.  optional params: `overwrite`
  6.  **Add a Gmail thread to a record**
      1.  POST `/actions/link-gmail-thread/{recordId`
          1.  params: **recordId**, **gmailThreadId**
  7.  **Verify request credentials**  
      1.  GET `/triggers/auth-test`







## License
[MIT](https://choosealicense.com/licenses/mit/)