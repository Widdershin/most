var most = require('.');
var jsdom = require('jsdom');

require(__dirname + "/node_modules/markdown-doctest/node_modules/babel/polyfill");

var html = [
  '<head></head>',
  '<body>',
    '<form></form>',
    '<div class="the-button"></div>',
    '<div class="button"></div>',
    '<div class="container"></div>',
    '<input class="x">',
    '<input class="y">',
    '<input name="search-text">',
    '<div class="result">',
  '</body>'
].join('\n');

function noop () {};

module.exports = {
  require: {
    most: most
  },

  globals: {
    most: most,
    regeneratorRuntime: regeneratorRuntime,
    document: jsdom.jsdom(html),
    exports: {},

    doSomething: noop,
    parseForm: noop,
    postToServer: noop,
    processData: noop,

    stream: most.empty(),
    mousemovesAfterFirstClick: most.empty()
  },

  babel: {
    stage: 0
  }
}
