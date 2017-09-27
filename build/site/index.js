var Metalsmith = require('metalsmith');
var layouts = require('metalsmith-layouts');
var partials = require('metalsmith-discover-partials');
var markdown = require('metalsmith-markdown');

Metalsmith(__dirname).metadata({
    "site": {
      "name": "Contrast-O-Vision",
      "url": "http://contrast-o-vision.ti.gt/",
      "description": "Check for accessible contrast in real time on real websites."
    }
  })
  .destination('../../docs')
  .concurrency(128)
  .use(markdown())
  .use(partials())
  .use(layouts({ engine: 'handlebars' }))
  .build(function(err) {
    if (err) throw err;
  });
