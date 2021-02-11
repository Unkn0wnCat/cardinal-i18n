const apiBasePath = '/i18n'

/**
 * Registers RESTful HTTP routes.
 * 
 * @param {string} serverObj - The server object.
 */
exports.register = (server) => {
  /**
   * Route: /$base/all
   * 
   * Returns all strings from all languages.
   */
  server.get(`${apiBasePath}/all`, async (request, reply) => {
    return {
      'en': require('./langs/en.js'),
      'en': require('./langs/fr.js'),
    }
  })
}