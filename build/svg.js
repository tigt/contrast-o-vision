var fs = require('fs');
var SVGO = require('svgo');

var inputSVG = fs.readFileSync(__dirname + '/filters.svg', 'utf8');

new SVGO({ sortAttrs: true }).optimize(inputSVG, fixSVGOsBrokenOutput);

function fixSVGOsBrokenOutput(inputSVG) {
  return inputSVG.data.replace('id="a"', 'id="contrast-o-vision"')
    .replace('<style/>', '');
}
