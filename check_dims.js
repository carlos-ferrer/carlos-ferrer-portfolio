
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(process.cwd(), 'public', 'assets');
const files = fs.readdirSync(assetsDir);

function getPngDimensions(filePath) {
    const fd = fs.openSync(filePath, 'r');
    const buffer = Buffer.alloc(24);
    fs.readSync(fd, buffer, 0, 24, 0);
    fs.closeSync(fd);

    // Check PNG signature
    if (buffer.toString('hex', 0, 8) !== '89504e470d0a1a0a') {
        return null; // Not a PNG
    }

    const width = buffer.readUInt32BE(16);
    const height = buffer.readUInt32BE(20);
    return { width, height };
}

function getJpgDimensions(filePath) {
    // minimal jpg parser or just skip for now as most are png
    return null;
}

files.forEach(file => {
    const fullPath = path.join(assetsDir, file);
    if (file.endsWith('.png')) {
        const dims = getPngDimensions(fullPath);
        if (dims) {
            console.log(`${file}: ${dims.width}x${dims.height}`);
        }
    }
});
