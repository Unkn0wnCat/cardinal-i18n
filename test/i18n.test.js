const i18n = require('../index.js')

/**
 * English
 */
test('Returns the English test string', () => {
  let returnedString = i18n.string('unit-test-string', 'en')

  expect(returnedString).toBe('English')
})

/**
 * French
 */
test('Returns the French test string', () => {
  let returnedString = i18n.string('unit-test-string', 'fr')
  
  expect(returnedString).toBe('French')
})