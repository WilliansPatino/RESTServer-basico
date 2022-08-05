const express = require('express');
var cors = require('cors');
require('dotenv').config();

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Middlewares
    this.middleware();

    this.routes();
  }

  middleware() {

      // CORS
      this.app.use(cors());

      // Directorio público
      this.app.use(express.static('public'));
  }


  routes() {
    // endpoint 
    this.app.get('/api', (request, response) => {
      // response.status(403).json({
      response.json({
        msg: 'Get API'
      });
    });

    this.app.put('/api', (request, response) => {
      response.status(401).json({
      // response.json({
        msg: 'Put API'
      });
    });
    this.app.post('/api', (request, response) => {
      // response.status(403).json({
      response.json({
        msg: 'Post API'
      });
    });
    this.app.delete('/api', (request, response) => {
      // response.status(403).json({
      response.json({
        msg: 'Delete API'
      });
    });
    this.app.patch('/api', (request, response) => {
      // response.status(403).json({
      response.json({
        msg: 'Patch API'
      });
    });

  }

  listen() {

      this.app.listen(this.port, () => {
          console.log('Rest Server corriendo en el puerto', this.port);
      });
  }

}

module.exports = Server;