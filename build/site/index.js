var Metalsmith = require('metalsmith');
var siteData = require('./metalsmith.json');
var layouts = require('metalsmith-layouts');
var partials = require('metalsmith-discover-partials');
var markdown = require('metalsmith-markdown');

Metalsmith(__dirname).metadata(siteData)
  .destination('../../docs')
  .concurrency(128)
  .use(markdown())
  .use(partials())
  .use(layouts({ engine: 'handlebars' }))
  .build(function(err) {
    if (err) throw err;
  });
