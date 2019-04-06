## Pré-requisitos

* [Git](https://git-scm.com/)
* [Node](https://nodejs.org/)
* [Npm](https://www.npmjs.com/)
* [Yarn](https://yarnpkg.com/pt-BR/)
* [Mysql](https://www.mysql.com/)
* [Express](http://expressjs.com/) 
* [GraphQL](http://graphql.org/) 
* [Knex](https://knexjs.org/)

## Instalando dependências
```
$ yarn install
```

## Rode o projeto

```
$ yarn start
```

## Acesse

```
http://localhost/4000/api
```

## Brinque

### Exemplo 1 - Querys - Consulta

```
{
  getUsers {
    name
    email
  }
  getUser(id: 2) {
    name
  }
}
```


### Exemplo 2 - Mutation - Insert

```
mutation {
  createUser(input: {
    name: "Chuva Regina",
    email: "chuva@chuvalinda.com.br",
    password: "chuva"
  }) {
    id
    name
    email
    password
  }
}
```
