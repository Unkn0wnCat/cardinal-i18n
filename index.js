module.exports = {
  'en': require('./src/langs/en.js'),
  'fr': require('./src/langs/fr.js'),
  'de': require('./src/langs/de.js'),
  'ipc': require('./src/ipc.js'),
  'httpRoutes': require('./src/http-routes.js'),

  /**
   * Returns a translated string from a lanauge based on the given key. This function is intended
   * for use in the main process only.
   * 
   * If the translation does not exist, the key is returned.
   * 
   * @param {string} key - The translation key.
   * @param {string} [lang=en] - The language to retreive the transation from. Defaults to `en`.
   */
  'string': (key, lang = 'en') => {
    return require(`./src/langs/${lang}.js`)[key] || key
  }
}
