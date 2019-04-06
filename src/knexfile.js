/**
 * informacoes de conexoes com banco de dados
 */
const { user, password } = require('./.env')

module.exports = {
  client: 'mysql',
  connection: {
    database: 'graphql',
    user,
    password
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
