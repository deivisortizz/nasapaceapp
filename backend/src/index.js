const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors()); 
app.use(express.json())
app.use(routes);

app.listen(3333);


// Rota -- Recurso

/*
** Métodos HTTP:
*
* GET/Listar: BUscar uma informação do backend
*
*POST: Criar uma informação no bancend 
*
*PUT: Alterar uma informação no bancend 
*
*DELETE: Deleta uma informação do backend 
*/

/*
Tipos e parametros:
*
* Query: Parametros nomeados na rota após "?" (Filtros, paginação )
* Route Params: Parâmetros utilizados para identificar recursos (Ex de um unico usuario )
* Request Body : Corpo da requisição ,utilizado para criar ou alterar recursos 
*/

/**
 * Banco de dados : SQL, PostgreSQL, Oracle, SQL Server ,
 * NoSql: MongoDB, CouchDB,Etc.
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users'), select('*').where()
  */



/**
 * Entidades: (Tudo aquilo que pode ser cadastrado no banco de dados )
 * Ong, Caso(Incident),
 */

 /**
  * Funcionalidades:
  * -Login de Ong,
  * -Cadastro de Ong
  * -Logout
  * - Cadastrar Novos Casos
  * -Deletar novos casos 
  * - Listar casos da ong 
  * -Listar todos os casos 
  * -Entrar em contato com a ong 

  */

  /**
   * Criar as tabelas de banco de dados 
   */