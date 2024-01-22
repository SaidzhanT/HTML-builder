const fs = require('node:fs').promises;
const path = require('node:path');

async function FileInformation() {
  const readingData = await fs.readdir('./03-files-in-folder/secret-folder', { withFileTypes: true });
  for (const file of readingData) {
    if (file.isFile()) {
      const filePath = path.join('./03-files-in-folder/secret-folder', file.name);
      const currentFile = await fs.stat(filePath);
      const fileExtension = path.extname(file.name).slice(1);
      const fileName = path.basename(file.name, '.' + fileExtension);
      const fileSize = currentFile.size / 1024;
      console.log(`${fileName}-${fileExtension}-${fileSize}kb`);
    }
  }
}

FileInformation().catch(console.error);

