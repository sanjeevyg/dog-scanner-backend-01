// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgress:///dog-scanner-backend-01'
    }
  },
  production: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL,
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  }

};
