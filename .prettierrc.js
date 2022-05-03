module.exports = {
  singleQuote: true,
  vueIndentScriptAndStyle: true,
  trailingComma: 'all',
  // preserve quotes around object property names in configs because some of it
  // needs to be always quoted for consistency, like rule names
  quoteProps: 'preserve',
  // (param) => {...} instead of param => {}
  arrowParens: 'always',
};
