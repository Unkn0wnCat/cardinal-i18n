module.exports = {
  'en': require('./src/en.js'),
  'fr': require('./src/fr.js'),

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
      return require(`./src/${lang}.js`)[key] || key
  }
}