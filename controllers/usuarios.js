const { response, request } = require('express');


const usuariosGet = (request, response) => {

    const { q, nombre = 'No name', apikey = 'No APIKEY', page = 1,limit = 5 } = request.query;

  response.json({ 
      msg: 'Get API - controlador',
      q,
      nombre,
      apikey,
      page, 
      limit
  });
}

const usuariosPost = (req, response) => {

  // Extraer el body
  const { nombre, edad } = req.body;

  response.json({ 
      msg: 'API Post - controlador',
      nombre, 
      edad
  });
}

const usuariosPut = (request, response) => {

    const { id }  = request.params;

  response.json({ 
      msg: 'API Put - controlador',
      id
  });
}

const usuariosPatch = (request, response) => {

  response.json({ 
      msg: 'API Patch  - controlador'
  });
}

const usuariosDelete = (request, response) => {

  response.json({ 
      msg: 'API Delete  - controlador'
  });
}



module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete
}