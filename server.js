const http = require('http');
const {
  createProduct,
} = require('./controllers/productController');

const server = http.createServer((req, res) => {
  if (req.url === '/api/products' && req.method === 'POST') {
    createProduct(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        message: 'Route Not Found: Please use the api/products endpoint',
      })
    );
  }
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;