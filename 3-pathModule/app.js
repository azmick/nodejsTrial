//nodejs sitesinden module kullanımlarını bulabilirsin.

const path = require('path');

let result = path.resolve('app.js');

let result1 = path.extname('app.js');
let result2 = path.parse(__filename)

// .js
console.log(result1);

/*
output
{
  root: 'C:\\',
  dir: 'C:\\Users\\dell\\nodejsTrial\\3-pathModule',
  base: 'app.js',
  ext: '.js',
  name: 'app'
}
*/
console.log(result2);

// C:\
console.log(result2.root);

// C:\Users\dell\nodejsTrial\3-pathModule
console.log(result2.dir);

//  app.js
console.log(result2.base);

// .js
console.log(result2.ext);

// app
console.log(result2.name);

