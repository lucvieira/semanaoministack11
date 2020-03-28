const express = require('express');
const routes = express.Router();
const crypto = require('crypto');
const connection = require('./database/connection');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

/*
    Tipos de parâmetros
        Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação...)
            request.query
        Route Params: Parâmetros utilizados na rota para identificar recursos ( ":id" )
            request.params

    Request Body: corpo da requisição, utilizado para criar ou alterar recursos
        request.body

*/

/*
    BANCO DE DADOS

        SQL:Mysql, SQlite, Oracle
        NoSQL: MongoDB, CouchDB, etc

    ///

    Driver do BD: Para buscar utiliza-se a SQL pura ("SELECT * FROM users")
    Query Builder: Funções para busca, edição e etc ( find() )
*/

routes.post('/sessions', SessionController.create);

routes.get('/profile', ProfileController.index);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);





module.exports = routes;