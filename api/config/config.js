require('dotenv').config();


module.exports = {
  

  // If using onine database
  // development: {
  //   use_env_variable: 'DATABASE_URL'
  // },

  development: {
    database: 'user_crud_node',
    username: 'root',
    password: 'null',
    host: '127.0.0.1',
    dialect: 'mysql'
  },

  test: {
    database: 'user_crud_node_test',
    username: 'root',
    password: 'null',
    host: '127.0.0.1',
    dialect: 'mysql'
  },

  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
};