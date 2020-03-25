const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/*
 *
 * Rotas / Recursos
 *
 */

/*
 *  Métodos HTTP
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: ALterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o "?" (servindo para Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou altera recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB and etc.
  */

  /**
   * Drivers: SELECT * FROM users
   * Query Biulder: table('users').select('*').where('...')
   */

