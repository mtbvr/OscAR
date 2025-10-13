import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from pure Node.js backend');
});

server.listen(5000, '0.0.0.0', () => {
  console.log('Server running on http://localhost:5000');
});