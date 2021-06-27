/**
 * Registers all main process IPC listeners for this module.
 * 
 * @param {object} ipcMain - Give the ipcMain object instance from Electron.
 */
exports.register = (ipcMain) => {
  console.log('Registering db IPC handlers')

  /**
   * Returns all strings for use in the UI.
   * 
   * i18n is a core module that gets packages with all hydra apps, since they
   * need strings even if they can't connect to a running server.
   * 
   * @param {object} query - An object with the following properties:
   * - `fn`: DB API function name.
   * - `args`: An **array** of arguments to give to the API function.
   */
  ipcMain.handle('get-i18n', async (event, query) => {
    console.info(`ipcMain received: get-i18n`)

    return {
      'en': require('./langs/en.js'),
      'fr': require('./langs/fr.js'),
      'de': require('./langs/de.js'),
    }
  })
}
