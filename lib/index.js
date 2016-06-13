var hljs = require('./highlight');

hljs.registerLanguage('bash', require('./languages/bash'));
hljs.registerLanguage('ruby', require('./languages/ruby'));
hljs.registerLanguage('yaml', require('./languages/yaml'));

module.exports = hljs;