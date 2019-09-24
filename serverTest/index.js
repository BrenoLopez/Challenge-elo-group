const express = require('express');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(express.json());

server.post('/', function (req, res) {
  console.log(req.body);
});
server.listen(8080, function () {
  console.log('Server funcionando na porta 8080!');
});