const knexfile = require('../knexfile');
const knex = require('knex')(knexfile);
module.exports = knex;


/**
 * criando usuario no banco
 * rode no terminal node config/database-estudo.js
 */
knex('users').insert({
    name: 'Cah',
    email: 'email@gmail.com',
    password: 'cah'
}).then(data => console.log(data))

/**
 * Alguns exemplos de consultas
 */

knex('users').then(resultado => console.log(resultado)) 
knex('users').first().then(resultado => console.log(resultado)) 
knex('users').where({id: 1}).then(resultado => console.log(resultado)) 
