const svgtofont = require('svgtofont');
const path = require('path');
 
const svgtofontindex =  svgtofont({
  src: path.resolve("./public", 'icon'), // svg path
  dist: path.resolve("./public", 'fonts'), // output path
  fontName: 'svgtofont', // font name
  css: true, // Create CSS files.
}).then(() => {
  console.log('done!');
});