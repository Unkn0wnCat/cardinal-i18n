const tap = require('tap')
const i18n = require('../index.js')

/**
 * English
 */
tap.test('Returns the English test string', async (t) => {
  let returnedString = i18n.string('unit-test-string', 'en')

  return t.equal(returnedString, 'English')
})

/**
 * French
 */
tap.test('Returns the French test string', async (t) => {
  let returnedString = i18n.string('unit-test-string', 'fr')
  
  return t.equal(returnedString, 'French')
})

/**
 * German
 */
tap.test('Returns the German test string', async (t) => {
  let returnedString = i18n.string('unit-test-string', 'de')
  
  return t.equal(returnedString, 'German')
})
