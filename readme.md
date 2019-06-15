<div align="center">
	<h1>css-selector-complexity</h1>
	<p>Calculate the Cyclomatic Complexity of a CSS selector</p>
</div>

[![NPM Version](https://img.shields.io/npm/v/css-selector-complexity.svg)](https://www.npmjs.com/package/css-selector-complexity)
[![Weekly downloads](https://img.shields.io/npm/dw/css-selector-complexity.svg)](https://www.npmjs.com/package/css-selector-complexity)
[![Build Status](https://travis-ci.org/bartveneman/css-selector-complexity.svg?branch=master)](https://travis-ci.org/bartveneman/css-selector-complexity)
[![Known Vulnerabilities](https://snyk.io/test/github/bartveneman/css-selector-complexity/badge.svg)](https://snyk.io/test/github/bartveneman/css-selector-complexity)
![Dependencies Status](https://img.shields.io/david/bartveneman/css-selector-complexity.svg)
![Dependencies Status](https://img.shields.io/david/dev/bartveneman/css-selector-complexity.svg)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![Project: Wallace](https://img.shields.io/badge/Project-Wallace-29c87d.svg)](https://www.projectwallace.com/oss)

## Installation

```sh
npm install css-selector-complexity
```

## Usage

```js
const complexity = require('css-selector-complexity')
console.log(complexity('.my > #brutal ~ [css]:first-child + selector'))
//-> 5
```

## Credits

The idea for this package originated from the following blog posts:

- [Cyclomatic Complexity: Logic in CSS](https://csswizardry.com/2015/04/cyclomatic-complexity-logic-in-css/)
  by [Harry Roberts](https://github.com/csswizardry)
- [Programming CSS](https://adactio.com/journal/14574) by
  [Jeremy Keith](https://github.com/adactio)

## Related projects

- **[Wallace CLI](https://github.com/bartveneman/wallace-cli)**<br>CSS Analytics
  in your terminal
- **[Constyble](https://github.com/bartveneman/constyble)**<br>CSS Complexity
  Linter
- **[css-analyzer](https://github.com/projectwallace/css-analyzer)**<br>Calculate
  analytics for CSS
