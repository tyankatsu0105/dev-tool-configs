# @tyankatsu0105/dev-tool-configs

[![npm version](https://badge.fury.io/js/%40tyankatsu0105%2Fdev-tool-configs.svg)](https://badge.fury.io/js/%40tyankatsu0105%2Fdev-tool-configs)
[![deploy](https://img.shields.io/badge/deploy-🛳%20Ship.js-blue?style=flat)](https://github.com/algolia/shipjs)

A config presets for dev tool

## Usage

```bash
npm i -D eslint @tyankatsu0105/dev-tool-configs
```

### prettier

```js
// .prettierrc.js
module.exports = require("@tyankatsu0105/dev-tool-configs/modules/prettier");
```

### eslint

```js
// eslintrc.js
module.exports = require("@tyankatsu0105/dev-tool-configs/modules/eslint");
```

### jest

```js
// jest.config.js
module.exports = require("@tyankatsu0105/dev-tool-configs/modules/jest");
```

## LICENSE (MIT)

See [LICENSE](https://github.com/tyankatsu0105/dev-tool-configs/blob/develop/LICENSE)
