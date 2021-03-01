// ================================================
// IMPORT
// ================================================
// https://www.npmjs.com/package/javascript-obfuscator
const obfuscator = require('javascript-obfuscator');
const createFilter = require('rollup-pluginutils').createFilter;
const fs = require('fs');
// ================================================
// CONFIG
// ================================================
const rawConfig = fs.readFileSync('./obfuscator/jsobfuscator_config.json');
const config = JSON.parse(rawConfig);
// ================================================
// PROCESS
// ================================================
export default (options = {}) => {
  options = {
    ...config,
    ...options,
  };
  const filter = createFilter(options.include, options.exclude);

  return {
    name: '@rollup/obfuscator',
    transform: (code, id) => {
      if (!filter(id)) return null;
      const obfResult = obfuscator.obfuscate(code, options);
      return obfResult.getObfuscatedCode();
    },
  };
}
// ================================================
