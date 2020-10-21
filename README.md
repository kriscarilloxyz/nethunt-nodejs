# nethunt-js

nethunt-js is a wrapper for https://nethunt.com/integration-api

<!-- badges: start -->

[![Inline docs](http://inch-ci.org/github/montpcdev/nethunt-js.svg?branch=master)](http://inch-ci.org/github/montpcdev/nethunt-js)
[![Known Vulnerabilities](https://snyk.io/test/github/montpcdev/nethunt-js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/montpcdev/nethunt-js?targetFile=package.json)
[![Codecov test coverage](https://codecov.io/github/montpcdev/nethunt-js/coverage.svg?branch=master)](https://codecov.io/github/Rdatatable/data.table?branch=master)
[![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/montpcdev/nethunt-js "JavaScript The Good Parts")
[![HitCount](http://hits.dwyl.com/montpcdev/netunt-js.svg)](http://hits.dwyl.com/montpcdev/netunt-js)
[![https://nodei.co/npm/@kriscarilloxyz/nethunt-js.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/@kriscarilloxyz/nethunt-js.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@kriscarilloxyz/nethunt-js)

<!-- badges: end -->

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