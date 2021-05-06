# cardinal-i18n

This repository contains all of the localized strings for all Hydra apps. This
is a CJS package designed to be used in the main process of Electron so that it
can return strings over IPC and HTTP.

## Sending Strings Over IPC

In the Electron main process, register the IPC listeners on app init.

```javascript
const ipc = require('hydra-i18n').ipc
ipc.register(ipcMain)
```

The module listens on the `get-i18n` IPC channel and returns all strings.

## Sending Strings Over HTTP

In the Electron main process, register the HTTP routes with the server (Fastify,
Express, etc) on app init.

```javascript
const routes = require('hydra-i18n').httpRoutes
routes.register(server)
```

Once the server is running, strings can be accessed under the `/api/i18n` route.

```
# HTTP GET /api/i18n/all

{'en': {'hello': 'Hello'}, 'fr': {'hello': 'Bonjour'}}
```

## Supported languages

- English
- French (in progress)

## Contributing

To contribute, please submit a pull request. Languages will only be added to the
Cardinal UI once all strings for the lanauge have been translated.