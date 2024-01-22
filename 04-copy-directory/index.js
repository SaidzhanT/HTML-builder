const fs = require('node:fs').promises;
const path = require('node:path');

async function сopyFolder() {
  await fs.mkdir('./04-copy-directory/files-copy', { recursive: true });
  const files = await fs.readdir('./04-copy-directory/files');
  for (const file of files) {
    const copyPathToFile = path.join('./04-copy-directory/files', file);
    const pastPathToFile = path.join('./04-copy-directory/files-copy', file);
    await fs.copyFile(copyPathToFile, pastPathToFile);
  }
  const copiedFiles = await fs.readdir('./04-copy-directory/files-copy');
  for (const file of copiedFiles) {
    const copyPathToFile = path.join('./04-copy-directory/files', file);
    const pastPathToFile = path.join('./04-copy-directory/files-copy', file);
    try {
      await fs.access(copyPathToFile);
    } catch (error) {
      if (error.code === 'ENOENT') {
        await fs.unlink(pastPathToFile);
      } else {
        throw error;
      }
    }
  }
}

сopyFolder().catch(console.error);
