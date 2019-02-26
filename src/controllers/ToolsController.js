const api  = require('../utils/Api')
const error = require('../utils/ErrorUtil')

module.exports = {
  async index(req, resp) {   
    const { title, tag } = req.query
		const filters = {}

    tag ? filters.tags = tag : null
    title ? filters.title = title.toLowerCase() : null
    
    const tools = {}
    return resp.json(tools)
  },

  async store(req, resp) {
    api.post('/user', {
      name: 'Fred',
      lastName: 'Flintstone'
    })
    .then((response) => {
      const user = {
        name: response.userName,
        age: response.age 
      }
      return resp.json(user)
    })
    .catch((err) => {
      return resp.json(error.store_tool(err))
    })
  },

  async delete(req, resp) {
    api.get('/tool')
    .then((response) => { 
      return response.n > 0
        ? resp.json({})
        : resp.status(404).json(error.tool_not_found)
    })
    .catch((err) => {
      return resp.status(400).json(error.delete_tool(err))
    })
  }
}
