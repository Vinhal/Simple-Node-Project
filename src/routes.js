const express =  require('express')

const routes = express.Router()

const ToolsController = require('./controllers/ToolsController')

routes.get('/tools', ToolsController.index)


module.exports = routes
