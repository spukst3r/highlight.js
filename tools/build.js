'use strict';

var commander = require('commander');
var path      = require('path');
var Queue     = require('gear').Queue;
var registry  = require('./tasks');

var build, target;

commander
  .usage('[options] [<languages ...>]')
  .option('-n, --no-compress', 'Disable compression')
  .option('-t, --target <name>', 'Build for target [browser, cdn, node]',
                                 /^(browser|cdn|node)$/i, 'browser')
  .parse(process.argv);

target = './' + commander.target.toLowerCase();
build  = require(target);

global.dir       = {};
global.dir.root  = path.dirname(__dirname);
global.dir.build = path.join(dir.root, 'build');

new Queue({ registry: registry })
  .clean(dir.build)
  .log('Starting build.')
  .tasks(build(commander))
  .log('Finished build.')
  .run();
