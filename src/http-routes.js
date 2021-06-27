const apiBasePath = '/api/i18n'

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
  server.get(`${apiBasePath}`, async (request, reply) => {
    return {
      'en': require('./langs/en.js'),
      'fr': require('./langs/fr.js'),
      'de': require('./langs/de.js'),
    }
  })
}
