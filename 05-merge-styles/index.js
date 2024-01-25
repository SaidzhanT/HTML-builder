const fs = require('node:fs');
const path = require('node:path');
const inputStyles = path.join(__dirname, 'styles'); 
const outputResult = path.join(__dirname, 'project-dist');
fs.access(outputResult, fs.constants.F_OK, (err) => {
  if (err) {
    fs.mkdir(outputResult, { recursive: true }, (err) => {
      if (err) throw err;
    });
  }
});

let arrStyle = [];

fs.readdir(inputStyles, (err, files) => {
  if (err) throw err;
  files = files.filter(file => path.extname(file) === '.css');  
  files.forEach(file => {
    fs.readFile(path.join(inputStyles, file), 'utf8', (err, data) => {
      if (err) throw err;
      arrStyle.push(data);
      fs.writeFile(path.join(outputResult, 'bundle.css'), arrStyle.join('\n'), err => {
        if (err) throw err;
      });
    });
  });
});