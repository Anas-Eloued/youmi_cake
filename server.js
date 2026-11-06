/**
 * KAIROX Intelligence Commerciale x Youmi Cake
 * Serveur de Démonstration Local (Zero Dépendance)
 * 
 * Lancement rapide :
 *   node server.js
 * ou
 *   npm start
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  // Normalize URL
  let parsedUrl = req.url.split('?')[0];
  if (parsedUrl === '/') {
    parsedUrl = '/index.html';
  }

  const filePath = path.join(__dirname, parsedUrl);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('404 Fichier non trouvé');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end(`Erreur serveur : ${err.code}`);
      }
    } else {
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Cache-Control': 'no-cache'
      });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log('================================================================');
  console.log('  KAIROX Intelligence Commerciale x Youmi Cake Casablanca       ');
  console.log('  Serveur Démo Client en ligne pour la présentation de 19h00    ');
  console.log('================================================================');
  console.log(`\n  Accès Web Local : http://localhost:${PORT}`);
  console.log(`  Ou double-cliquez simplement sur index.html\n`);
  console.log('  Appuyez sur Ctrl+C pour arrêter le serveur.');
  console.log('================================================================\n');
});

