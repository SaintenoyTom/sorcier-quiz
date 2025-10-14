// Mini serveur Node pour healthcheck Docker
const http = require('http');
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
  if (req.url === '/health') {
    res.end('ok');
  } else {
    res.end('not found');
  }
}).listen(PORT, () => {
  console.log(`Healthcheck server running on port ${PORT}`);
});
