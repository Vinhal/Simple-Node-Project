require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const server = require('http').Server(app)

app.use(cors())
app.use(express.json())
app.use(require('./routes'))

const { PORT } = process.env

server.listen(PORT, () => {
  console.log('Server started on port ' + PORT)
})
