const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const knex = require('knex')
const config = require('../knexfile')[process.env.DB_ENV || "development"]

const port = process.env.PORT
app.listen(port, () => console.log(`listening at port ${port}`))

app.get('/', (request, response) => {
    response.json("Heroko test")
})