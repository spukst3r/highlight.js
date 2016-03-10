var hljs = require('./highlight');

hljs.registerLanguage('ruby', require('./languages/ruby'));
hljs.registerLanguage('yaml', require('./languages/yaml'));

module.exports = hljs;