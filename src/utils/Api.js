const axios = require('axios')

const { URL } = process.env

const instance = axios.create({
  baseURL: URL,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})

module.exports = instance
