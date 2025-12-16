const fs = require('fs').promises;
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const nextDir = path.join(projectRoot, '.next');
const traceFile = path.join(nextDir, 'trace');

async function rmSafe(p) {
  try {
    await fs.rm(p, { recursive: true, force: true });
    console.log('Removed:', p);
  } catch (err) {
    console.warn('Could not remove:', p, err.message);
  }
}

(async () => {
  console.log('Cleaning .next artifacts...');
  await rmSafe(traceFile);
  await rmSafe(nextDir);
  console.log('Cleanup finished. Try running your build/dev server again.');
})();
