const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening at port ${port}`))

app.get('/', (_, response) => {
    response.json("hello world")
})