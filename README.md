# rollup-plugin-obfuscator

[Rollup](https://rollupjs.org/guide/en/ 'Rollup') plugin for [javascript-obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator 'Javascript Obfuscator')

## JavaScript Obfuscator

![logo](https://raw.githubusercontent.com/javascript-obfuscator/javascript-obfuscator/master/images/logo.png)

JavaScript Obfuscator is a powerful free obfuscator for JavaScript, containing a variety of features which provide protection for your source code.

**Key features:**

- variables renaming
- strings extraction and encryption
- dead code injection
- control flow flattening
- various code transformations
- and more...

The example of obfuscated code: [github.com](https://github.com/javascript-obfuscator/javascript-obfuscator/blob/master/examples/javascript-obfuscator.js)

**Online version:**

[obfuscator.io](https://obfuscator.io)

---

## Dependencies:

```sh
npm install --save-dev javascript-obfuscator @rollup/pluginutils;
```

---

## Usage:

```js
// file => rollup.config.js
import obfuscator from './obfuscator/rollup-plugin-obfuscator';
const config = [{
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd'
  }
  plugins: [
    obfuscator({}),
  ],
}];
export default config;
```
