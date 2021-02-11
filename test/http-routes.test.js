const http = require('http')
const fastify = require('fastify')({
  //'logger': true
})

const i18n = require('../index.js')
const baseUrl = '127.0.0.1:3000'

// init test server
fastify.listen(3000, '127.0.0.1', (error, address) => {
  if (error) {
    fastify.log.error(error)
    process.exit(1)
  }
})

// register the routes
i18n.httpRoutes.register(fastify)

function get(route) {
  return new Promise((resolve, reject) => {
    http.get({'path': `${baseUrl}${route}`}, (response) => {
      resolve(response)
    })
  })
}

/**
 * Begin tests
 */
test('/all', async () => {
  let response = await get('/all')

  console.log(response)

  expect(typeof response).toBe('object')
})