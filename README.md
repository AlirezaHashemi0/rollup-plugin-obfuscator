# rollup-plugin-obfuscator
Rollup plugin for [javascript-obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator "Javascript Obfuscator")

<br/>

## Dependencies:
```sh
npm install javascript-obfuscator @rollup/pluginutils --save-dev;
```

## Usage:
```js
// rollup.config.js
import obfuscator from './obfuscator/rollup_obfuscator';
const config = [{
  input: 'src/main.js',
  plugins: [
    obfuscator({}),
  ],
}];
export default config;
```