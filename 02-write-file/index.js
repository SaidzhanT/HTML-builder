console.log('Введи желаемый текст или "exit" для выхода:');

const fs = require('node:fs');
const readline = require('node:readline');
const path = require('node:path')

const inputOutput = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const filePath = path.join(__dirname, '02-write-file.txt');
const streamRecording = fs.createWriteStream(filePath);
inputOutput.on('line', (input) => {
  if (input !== 'exit') {
    streamRecording.write(input + '\n');
    console.log('Введите еще текст или "exit" для выхода:');
  } else {
    console.log('До свидания!');
    process.exit(0);
  }
});

inputOutput.on('SIGINT', () => {
  console.log('До свидания!');
  process.exit();
});