const fs = require('node:fs');
const path = require('node:path');
const flowPath = path.join(__dirname, 'text.txt');
fs.createReadStream(flowPath)
  .pipe(process.stdout);
