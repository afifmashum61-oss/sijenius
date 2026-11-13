const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
};

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/api_log')) {
    const q = req.url.split('data=')[1];
    if (q) {
      fs.writeFileSync('coords.json', decodeURIComponent(q), 'utf8');
      console.log('RECEIVED COORDS:', decodeURIComponent(q));
    }
    res.end('ok');
    return;
  }
  if (req.method === 'POST' && req.url === '/report_inspect') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      console.log('Received /report_inspect body length:', body.length);
      try {
        const data = JSON.parse(body);
        console.log('Parsed data. Corners:', data.corners, 'dimensions:', data.width, 'x', data.height);
        if (data.dataUri) {
          const b64 = data.dataUri.split('base64,')[1];
          fs.writeFileSync('C:/Users/HP/.gemini/antigravity/brain/1827c660-ff9a-466b-837e-e0584b7294bf/scratch/video_frame.png', Buffer.from(b64, 'base64'));
          fs.writeFileSync('C:/Users/HP/.gemini/antigravity/brain/1827c660-ff9a-466b-837e-e0584b7294bf/scratch/video_info.json', JSON.stringify({ width: data.width, height: data.height, duration: data.duration, corners: data.corners }, null, 2));
        }
      } catch(e) {
        console.error('Error handling /report_inspect:', e);
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end('{"ok":true}');
    });
    return;
  }
  let reqUrl = decodeURI(req.url.split('?')[0]);
  if (reqUrl === '/') {
    reqUrl = fs.existsSync(path.join(__dirname, 'index.html')) ? '/index.html' : '/code_abbasiyah_edit_oke.html';
  }
  const filePath = path.join(__dirname, reqUrl);
  
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range && ext === '.mp4') {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunksize = (end - start) + 1;
    const file = fs.createReadStream(filePath, { start, end });
    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    });
    file.pipe(res);
    return;
  }

  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  
  res.writeHead(200, {
    'Content-Type': contentType,
    'Accept-Ranges': 'bytes',
    'Content-Length': fileSize
  });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

