const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svg = fs.readFileSync(path.join(__dirname, 'icon.svg'));

Promise.all([
  sharp(svg).resize(192, 192).png().toFile(path.join(__dirname, 'icon-192.png')),
  sharp(svg).resize(512, 512).png().toFile(path.join(__dirname, 'icon-512.png'))
]).then(() => console.log('icon-192.png va icon-512.png yaratildi.'))
  .catch(err => { console.error(err); process.exit(1); });
