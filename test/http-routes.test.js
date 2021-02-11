const tap = require('tap')
const { server } = require('hydra-test-tools')

// what's being tested
const { httpRoutes } = require('../index.js')

// when testing is done
tap.tearDown(() => {
  server.stop()
})

// start test server
server.start()

// register the routes being tested
httpRoutes.register(server.instance)

// when server is ready, run all tests
server.instance.ready(() => {
  /**
   * Test #1
   */
  tap.test('GET `/all`', async (t) => {
    let response = await server.get('/i18n/all')
  
    return t.type(response.data, 'object')
  })
})