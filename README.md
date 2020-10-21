# nethunt-js

nethunt-js is a wrapper for https://nethunt.com/integration-api

## Badges

- Documentation
- Security
- CI (Travis)
- Coverage
- Dependencies
- devDependencies
- NPM package
- NPM Module Download Stats

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

## License

[MIT](https://choosealicense.com/licenses/mit/)