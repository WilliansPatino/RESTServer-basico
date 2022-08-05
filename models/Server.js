const express = require('express');
var cors = require('cors');
require('dotenv').config();

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // API
    this.usersRoutePath = '/api/usuarios';

    // Middlewares
    this.middleware();

    this.routes();
  }

  middleware() {

      // CORS
      this.app.use(cors());

      // Lectura y parseo del body // Cuqluier info que venga en POST o 
      // DELETE va a serializar a formato JSON.
      this.app.use( express.json() );

      // Directorio público
      this.app.use(express.static('public'));
  }


  routes() {

      this.app.use(this.usersRoutePath, require('../routes/users'));

  }

  listen() {

      this.app.listen(this.port, () => {
          console.log('Rest Server corriendo en el puerto', this.port);
      });
  }

}

module.exports = Server;