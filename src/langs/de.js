module.exports = {
  /**
   * Cardinal Desktop Clients
   */

  // string used for unit test - this must be the anglicised language name
  "unit-test-string":                                                     "German",

  // general aria
  "aria.label.albums.controls.order-by":                                  "Sortiere deine Alben",
  "aria.label.artists.controls.order-by":                                 "Sortiere deine Künstler",
  "aria.label.tracks.controls.order-by":                                  "Sortiere deine Songs",
  "aria.label.ui-listbox.remove-list-item":                               "Removes the item from this list",
  
  // object types
  "artist":                                                               "Künstler",
  "artists":                                                              "Künstler",
  "album":                                                                "Album",
  "albums":                                                               "Alben",
  "track":                                                                "Track",
  "tracks":                                                               "Tracks",
  "genre":                                                                "Genre",
  "genres":                                                               "Genres",
  "playlist":                                                             "Playlist",
  "playlists":                                                            "Playlists",

  // general
  "app-name":                                                             "Cardinal",
  "cardinalserver":                                                       "Cardinal Server",
  "cardinalserver-short":                                                 "Server",
  "cardinalmusic":                                                        "Cardinal Musik",
  "cardinalmusic-short":                                                  "Musik",
  "close":                                                                "Schließen",
  "save":                                                                 "Speichern",
  "reset":                                                                "Zurücksetzen",
  "continue":                                                             "Fortsetzen",
  "cancel":                                                               "Abbrechen",
  "quit":                                                                 "Beenden",
  "menu":                                                                 "Menü",
  "disc":                                                                 "Disc",
  "choose-file":                                                          "Wähle Datei",
  "or":                                                                   "oder",
  "of":                                                                   "von",
  "source-icon.local.title":                                              "Dieser Song kommt aus einer Datei auf deinem Computer",
  "danger-confirm":                                                       "Bist du dir sicher? Das kann nicht rückgängig gemacht werden.",
  "toggle-favorite":                                                      "Hinzufügen/Entfernen von Favoriten",
  "play-count":                                                           "Abspielanzahl",
  "no-content":                                                           "Keine Inhalte",
  "year":                                                                 "Jahr",
  "play":                                                                 "Abspielen",
  "version":                                                              "Version",

  // music app general
  "music-app.context-menu.group-name":                                    "Cardinal",
  "music-app.context-menu.settings":                                      "Einstellungen",
  
  // system menu
  "system-menu.about":                                                    "Über Cardinal",
  "system-menu.close-window":                                             "Fenster schließen",
  "system-menu.check-for-updates":                                        "Auf Aktualisierungen prüfen...",
  "system-menu.back":                                                     "Zurück",
  "system-menu.forward":                                                  "Vorwärts",
  "system-menu.settings":                                                 "Einstellungen",
  "system-menu.quit":                                                     "Cardinal schließen",
  "system-menu.top-level.file":                                           "Datei",
  "system-menu.top-level.view":                                           "Ansicht",
  "system-menu.top-level.playback":                                       "Wiedergabe",
  "system-menu.top-level.help":                                           "Hilfe",
  "system-menu.toggle-play-pause":                                        "Abspielen/Pause umschalten",
  "system-menu.play":                                                     "Abspielen",
  "system-menu.pause":                                                    "Pause",
  "system-menu.stop":                                                     "Stopp",
  "system-menu.next":                                                     "Nächstes",
  "system-menu.previous":                                                 "Vorheriges",
  "system-menu.macos.hide":                                               "Verstecken",
  "system-menu.macos.unhide":                                             "Zeigen",
  "system-menu.reset-zoom":                                               "Zoom zurücksetzen",
  "system-menu.zoom-in":                                                  "Reinzoomen",
  "system-menu.zoom-out":                                                 "Rauszoomen",
  "system-menu.toggle-dev-tools":                                         "Entwicklerwerkzeuge",
  "system-menu.top-level.window":                                         "Fenster",
  "system-menu.minimize":                                                 "Minimieren",
  "system-menu.toggle-queue":                                             "Warteschlange umschalten",
  "system-menu.show-welcome":                                             "Willkommensnachricht zeigen",
  "system-menu.learn-more":                                               "Mehr erfahren",
  "system-menu.website":                                                  "Cardinal Webseite",
  "system-menu.attributions":                                             "Danksagungen",
  "system-menu.open-source":                                              "Open Source",
  "system-menu.terms-and-conditions":                                     "Geschäftsbedingungen",
  "system-menu.privacy-policy":                                           "Datenschutz",
  "system-menu.cut":                                                      "Ausschneiden",
  "system-menu.copy":                                                     "Kopieren",
  "system-menu.paste":                                                    "Einfügen",
  "system-menu.select-all":                                               "Alles auswählen",
  "system-menu.full-screen":                                              "Vollbild",
  "system-menu.reload":                                                   "Neu laden",
  "system-menu.front":                                                    "Vordergrund",
  "system-menu.window":                                                   "Fenster",
  
  // server-connect
  "server-connect.form-title":                                            "Mit einem Cardinal Server verbinden",
  "server-connect.form-field.host":                                       "Host",
  "server-connect.form-field.port":                                       "Port",
  "server-connect.form-submit":                                           "Verbinden",
  "server-connect.logo-title":                                            "Zwitscher zwitscher",
  "server-connect.help-c2a":                                              "Wie verbinde ich mich?",
  "server-connect.help-body":                                             `
                                                                          <p>Um diese App zu verwenden benötigst du einen <a href="https://cardinalapps.xyz/cardinal-server" class="external">Cardinal Server</a> in deinem Netzwerk.</p>
                                                                          <p>Sobald der Server läuft ist seine Adresse im <strong>Status</strong>-Widget sichtbar, und sieht etwa so aus:</p>
                                                                          <code>192.168.178.0:0000</code>
                                                                          <p>Der <strong>Host</strong> ist der Teil links vom Doppelpunkt, er ist meistens eine IP-Adresse.</p>
                                                                          <p>Der <strong>Port</strong> ist der Teil rechts vom Doppelpunkt, er ist eine Nummer mit bis zu 5 Ziffern.</p>
                                                                          <p>Der Server mit dem du dich verbindest muss während der Verwendung dieser App weiter laufen.</p>
                                                                          `,
  "server-connect.connection-failed":                                     "Serververbindung fehlgeschlagen.<br>Läuft der Server in deinem lokalen Netzwerk?",
  "server-connect.autoconnect-failed":                                    "Konnte nicht automatisch mit dem Cardinal-Server wiederverbinden.",
  
  // self updater
  "updater.ask-to-update.title":                                          "Aktualisierung verfügbar",
  "updater.ask-to-update.msg":                                            "Möchtest du jetzt aktualisieren? Die Anwendung wird neu starten.\n\n",
  "updater.ask-to-update.btn.yes":                                        "Jetzt Aktualisieren",
  "updater.ask-to-update.btn.no":                                         "Später",
  "updater.no-updates.title":                                             "Keine Aktualisierung verfügbar",
  "updater.no-updates.message":                                           "Keine Aktualisierung verfügbar.\n\nDu hast bereits die neuste Version.",
  
  // general context menu
  "context-menu.inspect-element":                                         "Element untersuchen",
  "context-menu.toggle-dev-tools":                                        "Entwicklerwerkzeuge",

  // warnings/notifications/dialogues
  "media-keys-need-permission.notification.title":                        "Berechtigung benötigt",
  "media-keys-need-permission.notification.message":                      "<p>Cardinal benötigt Berechtigung um die Medientasten auf deiner Tastatur zu verwenden.</p><p>Starte die App neu nachdem du die Berechtigung vergeben hast.</p>",
  "notification.cannot-load-music-file.message":                          "Konnte Song nicht abspielen.\n\n{{song}}\n\nMit nächstem Song fortfahren?",
  
  // search
  "search-bar.placeholder":                                               "Name, Titel, Jahr",
  "search-bar.context-menu.clear-history":                                "Suchhistorie löschen",
  "search.group-title.tracks":                                            "Songs",
  "search.group-title.musicReleases":                                     "Veröffentlichungen",
  "search.group-title.artists":                                           "Künstler",
  "search.group-title.genres":                                            "Genres",
  "search.group-title.playlists":                                         "Playlists",
  "search.no-results":                                                    "Keine Ergebnisse",
  
  // navigation sidebar
  "nav.music.explore":                                                    "Musik Erkunden",
  "nav.music.title":                                                      "Musikbibliothek",
  "nav.music.artists":                                                    "Künstler",
  "nav.music.releases":                                                   "Veröffentlichungen",
  "nav.music.tracks":                                                     "Songs",
  "nav.music.genres":                                                     "Genres",
  "nav.music.playlists":                                                  "Playlists",
  "nav.cinema.home-cinema":                                               "Heimkino",
  "nav.cinema.title":                                                     "TV & Filme",
  "nav.cinema.tv":                                                        "TV",
  "nav.cinema.movies":                                                    "Filme",
  "nav.cinema.genres":                                                    "Genres",
  "nav.cinema.channels":                                                  "Kanäle",
  
  // playlists
  "playlists.smart-playlist.top-songs.title":                             "Deine Top-Songs",
  "playlists.smart-playlist.recently-added.title":                        "Kürzlich hinzugefügt",
  
  // settings panel
  "settings.main-dot-menu":                                               "Einstellungen",
  "settings.context-menu":                                                "Einstellungen",
  "settings.main-title":                                                  "Einstellungen",
  "settings.tab-name-general":                                            "Allgemein",
  "settings.tab-name-music-playback":                                     "Musikwiedergabe",
  "settings.tab-name-window":                                             "Fenster",
  "settings.tab-name-theme":                                              "Aussehen",
  "settings.tab-name-updates":                                            "Aktualisierungen",
  "settings.tab-name-advanced":                                           "Fortgeschritten",
  "settings.language.title":                                              "Sprache",
  "settings.confirm-electron-quit":                                       "Bestätigung vorm Schließen",
  "settings.local-files.title":                                           "Dateien auf meinem Computer",
  "settings.local-files.instructions":                                    "Ziehe Ordner in diese Box um sie zu deinen Medien hinzuzufügen.",
  "settings.local-files.importer-msg":                                    "Neue Ordner werden automatisch Importiert wenn die Einstellungen geschlossen werden.",
  "settings.local-files.remove-folder-tooltip-message":                   "Cardinal wird diesen Ordner beim Aktualisieren der Bibliothek nicht mehr überprüfen",
  "settings.local-files.folder-structure-guide-opener":                   "Ordnerstruktur vorschlagen",
  "settings.online-accounts.title":                                       "Cloud-Musik",
  "settings.online-accounts.instructions":                                "Melde dich optional bei einem Cloud-Musikdienst an",
  "settings.online-accounts.spotify-login-with":                          "Melde dich mit deinem Spotify-Account an",
  "settings.online-accounts.applemusic-login-with":                       "Melde dich mit deiner Apple-ID an",
  "settings.online-accounts.googleplaymusic-login-with":                  "Melde dich mit deinem Google-Account an",
  "settings.online-accounts.logged-in-as":                                "Angemeldet als {{name}}",
  "settings.online-accounts.logout":                                      "Abmelden",
  "settings.factory-reset.title":                                         "Anwendung zurücksetzen",
  "settings.factory-reset.desc":                                          "Alles zurücksetzen",
  "settings.factory-reset.confirm":                                       "Das wird nur diese Cardinal-Anwendung zurücksetzen, so als wäre sie frisch installiert.\n\nNichts auf dem Server, wie die Abspielhistorie, wird beeinflusst. Um die Serverdaten zu löschen, verwende die Server-Anwendung.\n",
  "settings.color-theme.title":                                           "Farbthema",
  "settings.color-theme.option.light":                                    "Hell (beta)",
  "settings.color-theme.option.dark":                                     "Dunkel",
  "settings.accent-color.title":                                          "Akzentfarbe",
  "settings.notifications.title":                                         "Benachrichtigungen",
  "settings.notifications.song-change-label":                             "Wenn der Song wechselt",
  "settings.music-playback.title":                                        "Musikwiedergabeoptionen",
  "settings.music-playback.always-load-whole-song":                       "Immen den kompletten Song vor dem Abspielen laden. Das wird eine signifikante Verzögerung beim Abspielen eines neuen Songs hinzufügen, sorgt aber dafür, dass der Song nicht nachladen muss, wenn er über eine langsame Verbindung geladen wird.",
  "settings.custom-css.title":                                            "Eigenes CSS",
  "settings.custom-css.notice":                                           "Anmerkung",
  "settings.custom-css.instructions":                                     "Wenn du etwas kaputt machst, drücke <code class='inline win32-only'>Ctrl+Alt+I</code><code class='inline darwin-only'>Cmd+Option+I</code> und führe <code class='inline'>disableCustomCSS()</code> in der Konsole aus.",
  "settings.developer.title":                                             "Entwickler",
  "settings.developer.enable-label":                                      "entwicklermodus aktivieren",
  "settings.start-page.title":                                            "Startseite",
  "settings.updates.title":                                               "Aktualisierungen",
  "settings.updates.auto-check-label":                                    "Automatisch auf Aktualisierungen prüfen",
  "settings.updates.manual-check-label":                                  "Jetzt prüfen",
  "settings.window.title":                                                "Verhalten",
  "settings.window.autoclose-on-blur":                                    "Das Fenster automatisch schließen, wenn der Fokus verloren geht",
  
  // playback-controls
  "playback-controls.waveform-error-message":                             "Waveform nicht verfügbar",
  
  // breadcrumbs
  "breadcrumbs.explore":                                                  "Erkunden",
  "breadcrumbs.music-library":                                            "Musikbibliothek",
  "breadcrumbs.artist":                                                   "Künstler",
  "breadcrumbs.album":                                                    "Album",
  "breadcrumbs.music-release":                                            "Veröffentlichung",
  "breadcrumbs.genres":                                                   "Genres",
  "breadcrumbs.genre":                                                    "Genre",
  "breadcrumbs.playlists":                                                "Playlists",
  "breadcrumbs.playlist":                                                 "Playlist",
  
  // artists view
  "view.artists.title":                                                   "Künstler",
  
  
  // single artist
  "view.artist.favorite-tracks.title":                                    "Lieblingssongs",
  "view.artist.most-played.title":                                        "Meist gespielte Songs",
  "view.artist.release-type.albums":                                      "Alben",
  "view.artist.release-type.singles":                                     "Singles",
  "view.artist.release-type.eps":                                         "EPs",
  "view.artist.release-type.compilations":                                "Compilations",
  "view.artist.release-type.soundtrack":                                  "Soundtracks",
  "view.artist.release-type.live":                                        "Live",
  "view.artist.release-type.remix":                                       "Remixes",
  "view.artist.release-type.other":                                       "Andere Veröffentlichungen",
  "view.artist.similar-artists.title":                                    "Ähnliche Künstler",
  
  // albums view
  "view.empty-message":                                                   "Musik hinzufügen",
  "view.albums.title":                                                    "Alben",
  "view.albums.control-group-filter-title":                               "Filter",
  "view.albums.control-group-filter-option-genre":                        "Genre",
  "view.albums.control-group.order.title":                                "Sortierung",
  "view.albums.control-group.order.option.name":                          "Name",
  "view.albums.control-group.order.option.year":                          "Jahr",
  "view.albums.control-group.name-asc.aria-assertive-change-message":     "Alben sortiert nach Namen in aufsteigender Richtung",
  "view.albums.control-group.name-desc.aria-assertive-change-message":    "Alben sortiert nach Namen in absteigender Richtung",
  "view.albums.control-group.year-asc.aria-assertive-change-message":     "Alben sortiert nach Jahr in aufsteigender Richtung",
  "view.albums.control-group.year-desc.aria-assertive-change-message":    "Alben sortiert nach Jahr in absteigender Richtung",
  "view.artists.control-group.name-asc.aria-assertive-change-message":    "Künstler sortiert nach Namen in aufsteigender Richtung",
  "view.artists.control-group.name-desc.aria-assertive-change-message":   "Künstler sortiert nach Namen in absteigender Richtung",

  // control group
  "control-group.cycle-button.name-asc-desc":                             "Nach Namen sortieren",
  "control-group.cycle-button.year-asc-desc":                             "Nach Jahr sortieren",
  "control-group.asc":                                                    "Aufsteigend",
  "control-group.desc":                                                   "Absteigend",

  // single album
  "view.album.artist.prefix":                                             "Von ",
  "view.album.song-count":                                                "{{n}} Songs",
  "view.album.related.title":                                             "Alben von ",
 
  // tracks view
  "view.tracks.title":                                                    "Songs",

  // genres view
  "view.genres.title":                                                    "Genres",
  
  // single genre view
  "view.genre.artist-grid-title":                                         "{{genre}} Künstler",
  "view.genre.album-grid-title":                                          "{{genre}} Alben",
  
  // genre tag
  "genre-tag.context-menu.edit-genre":                                    "Genre bearbeiten",

  // playlists view
  "view.playlists.title":                                                 "Playlists",
  
  // single playlist view
  "view.playlist.artists-in-playlist-title":                              "Künstler in dieser Playlist",
  "view.playlist.albums-in-playlist-title":                               "Alben in dieser Playlist",
  "view.playlist.tracks-in-playlist-title":                               "Songs in dieser Playlist",
  "view.playlist.play-button-c2a":                                        "Abspielen",
  
  // track list
  "track-list.empty-playlist":                                            "Leere Playlist",
  "track-table.playlist-stats.tracks":                                    "{{n}} <sub>Songs</sub>",
  "track-table.playlist-stats.tracks-singular":                           "{{n}} <sub>Song</sub>",

  // track block
  "track-block.context-menu.play-track":                                  "Song abspielen",
  "track-block.context-menu.play-next":                                   "Song als Nächstes abspielen",
  "track-block.context-menu.add-to-queue":                                "Song zur Warteschlange hinzufügen",
  "track-block.context-menu.add-to-playlist":                             "Song zu Playlist hinzufügen",
  "track-block.context-menu.edit-track":                                  "Song bearbeiten",
  "track-block.context-menu.remove-from-playlist":                        "Aus Playlist entfernen",

  // artist block
  "artist-block.context-menu.shuffle-artist":                             "Zufällige Künstlerwiedergabe",
  "artist-block.context-menu.edit-artist":                                "Künstler bearbeiten",

  // album block
  "album-block.context-menu.group-name":                                  "Album",
  "album-block.context-menu.play-album":                                  "Album abspielen",
  "album-block.context-menu.play-next":                                   "Album als Nächstes abspielen",
  "album-block.context-menu.add-to-queue":                                "Album zur Warteschlange hinzufügen",
  "album-block.context-menu.add-to-playlist":                             "Album zu Playlist hinzufügen",
  "album-block.context-menu.edit-album":                                  "Album bearbeiten",
  
  // release metadata
  "release-metadata.artist":                                              "Künstler",
  "release-metadata.year":                                                "Veröffentlicht",
  "release-metadata.average-bitrate":                                     "Durchschnittliche Bitrate",
  "release-metadata.file-type":                                           "Dateityp",
  "release-metadata.file-types":                                          "Dateitypen",
  "release-metadata.duration":                                            "Länge",

  // playlists
  "playlist-list.empty-message":                                          "Playlist erstellen",
  "playlist-list.form.create.button-title":                               "Neue Playlist erstellen",
  "playlist-list.form.create.name-label":                                 "Name",
  "playlist-list.form.create.submit-button":                              "Erstellen",
  "playlist-block.context-menu.play":                                     "Playlist abspielen",
  "playlist-block.context-menu.play-next":                                "Playlist als Nächstes abspielen",
  "playlist-block.context-menu.add-to-queue":                             "Playlist zur Warteschlange hinzufügen",
  "playlist-block.context-menu.delete-playlist":                          "Playlist löschen",
  "playlist-block.context-menu.edit-playlist":                            "Playlist bearbeiten",
  "playlist-block.track-count.suffix":                                    "Songs",
  "playlist-block.track-count.suffix-singular":                           "Song",

  // queue
  "queue.title":                                                          "Als Nächstes",
  "queue.shuffling-title":                                                "Mischen",
  "queue.num-in-queue":                                                   "{{n}} Einträge",
  "queue.num-in-queue-singular":                                          "{{n}} Eintrag",
  "queue.btn.delete":                                                     "Leer",
  "queue.empty-message":                                                  "Es gibt keinen nächsten Eintrag",
  "queue.context-menu.group-name":                                        "Warteschlange",
  "queue.context-menu.remove-from-queue":                                 "Aus der Warteschlange entfernen",

  // ------------------------------ new translations ------------------------------

  // explore
  "view.explore.title":                                                   "Meine Musik erkunden",
  
  // attributions modal
  "open-source.title":                                                    "Quelloffene Software",
  "open-source.first-party":                                              `<p>Diese Quelloffenen Bibliotheken wurden für Cardinal entwickelt:</p>
                                                                          <ul>
                                                                            <li><a href="http://github.com/somebeaver/Lowrider.js" class="external">Lowrider.js</a></li>
                                                                            <li><a href="http://github.com/somebeaver/double-u" class="external">double-u</a></li>
                                                                            <li><a href="http://github.com/somebeaver/Bridge.js" class="external">Bridge.js</a></li>
                                                                            <li><a href="http://github.com/somebeaver/Boogietime.js" class="external">Boogietime.js</a></li>
                                                                            <li><a href="http://github.com/somebeaver/sqleary.js" class="external">sqleary.js</a></li>
                                                                            <li><a href="http://github.com/somebeaver/router.js" class="external">router.js</a></li>
                                                                            <li><a href="http://github.com/somebeaver/html.js" class="external">html.js</a></li>
                                                                            <li><a href="http://github.com/somebeaver/cardinal-indexing-service" class="external">cardinal-indexing-service</a></li>
                                                                          </ul>`,
  "open-source.third-party":                                              `<p>Cardinal benutzt folgende Drittbibliotheken:</p>
                                                                          <ul>
                                                                            <li><a href="https://www.electronjs.org/" class="external">Electron</a></li>
                                                                            <li><a href="https://www.npmjs.com/package/sqlite3" class="external">sqlite3</a></li>
                                                                            <li><a href="https://www.fastify.io/" class="external">Fastify</a></li>
                                                                            <li><a href="https://www.npmjs.com/package/ws" class="external">ws.js</a></li>
                                                                            <li><a href="https://www.npmjs.com/package/sharp" class="external">sharp</a></li>
                                                                            <li><a href="https://www.npmjs.com/package/webpack" class="external">webpack</a></li>
                                                                            <li><a href="https://github.com/electron-userland/electron-builder" class="external">electron-builder</a></li>
                                                                            <li><a href="https://github.com/electron/electron-notarize" class="external">electron-notarize</a></li>
                                                                            <li><a href="https://howlerjs.com/" class="external">Howler.js</a></li>
                                                                            <li><a href="https://swiperjs.com/" class="external">Swiper</a></li>
                                                                            <li><a href="https://www.npmjs.com/package/music-metadata" class="external">music-metadata</a></li>
                                                                            <li><a href="https://www.npmjs.com/package/ip" class="external">IP</a></li>
                                                                            <li><a href="https://www.npmjs.com/package/fast-glob" class="external">fast-glob</a></li>
                                                                            <li><a href="https://www.npmjs.com/package/md5-file" class="external">md5-file</a></li>
                                                                            <li><a href="https://www.npmjs.com/package/dotenv" class="external">dotenv</a></li>
                                                                            <li><a href="https://www.npmjs.com/package/humanize-duration" class="external">humanize-duration</a></li>
                                                                            <li><a href="https://github.com/cowboy/javascript-route-matcher" class="external">javascript-route-matcher</a></li>
                                                                            <li><a href="https://node-tap.org/" class="external">node-tap</a></li>
                                                                          </ul>`,
  
  "open-source.fonts":                                                    `<p>Und diese Schriftarten:</p>
                                                                          <ul>
                                                                            <li><a href="https://fonts.google.com/specimen/Open+Sans" class="external">Open Sans</a></li>
                                                                            <li><a href="https://fonts.google.com/specimen/Yantramanav" class="external">Yantramanav</a></li>
                                                                            <li><a href="https://fontawesome.com/" class="external">Font Awesome</a></li>
                                                                          </ul>`,
  
  // about modal
  "about.body":                                                           `<p>Cardinal wird designt und programmiert von <a href="https://github.com/somebeaver" class="external">somebeaver 🌴</a>, deutsche Übersetzung von <a href="https://kevink.dev" class="external">Kevin Kandlbinder</a></p>
                                                                          <p>Verfolge das Projekt auf <a href="https://github.com/somebeaver/cardinal-project" class="external">GitHub</a> und <a href="https://old.reddit.com/r/cardinalapps/" class="external">Reddit</a></p>`,
  
  // folder structure guide modal
  "folder-structure-guide.title":                                         "Ordnerstrukturguide",
  "folder-structure-guide.desc-before-examples":                          `<p><strong>Wenn Dateien importiert werden, bevorzugt Cardinal immer die eingebetteten Metadaten.</strong></ul>
                                                                           <p>Wenn allerdings Metadaten fehlen, wird Cardinal versuchen diese aus den umliegenden Ordnern und Dateien zu implizieren.</p>
                                                                           <p>Für die besten Resultate, halte dich bitte an folgende Ordnerstruktur.</p>`,
  "folder-structure-guide.example.music.title":                           "Musikdateien",
  "folder-structure-guide.example.music.code.artist":                     "Künstlername",
  "folder-structure-guide.example.music.code.album":                      "Albenname",
  "folder-structure-guide.example.music.code.disc":                       "Disc 01 (or CD 01)",
  "folder-structure-guide.example.music.code.song":                       "01 - Songname.mp3",
  "folder-structure-guide.example.music.code.cover-art":                  "cover.jpg",
  "folder-structure-guide.supported-types.title":                         "Unterstützte Dateinamen",
  "folder-structure-guide.supported-types.music-files":                   "Musikdateien",
  "folder-structure-guide.supported-types.artwork":                       "Albencover",

  // metadata editor
  "metadata-editor.editing-artist.title":                                 "Künstlerbearbeitung",
  "metadata-editor.editing-album.title":                                  "Albenbearbeitung",
  "metadata-editor.editing-track.title":                                  "Songbearbeitung",
  "metadata-editor.editing-playlist.title":                               "Playlistbearbeitung",
  "metadata-editor.editing-genre.title":                                  "Genrebearbeitung",
  "metadata-editor.toggle-switch.also-update-file-metadata":              "Auch die Dateimetadaten aktualisieren",
  "metadata-editor.toggle-switch.merge-should-overwrite":                 "Ziel beim Zusammenführen überschreiben",
  "metadata-editor.toggle-switch.merge-should-overwrite-tooltip":         "Wenn das Aktualisieren der Metadaten zwei Dinge zusammenführt (Künstler, Filme, Was auch immer), entscheidet dies ob die Daten in diesem Formular die bestehenden überschreibt.",
  "metadata-editor.api-update-failed":                                    "Die Aktualisierung hat nicht geklappt",
  "metadata-editor.date.day":                                             "Tag",
  "metadata-editor.date.month":                                           "Monat",
  "metadata-editor.date.year":                                            "Jahr",
  "metadata-editor.total-discs-label":                                    "Von",
  "metadata-editor.genres":                                               "Genres",
  "metadata-editor.smart-fill-guess.tooltip":                             "Beim Import hat Cardinal diesen Wert geraten, da in der Datei die entsprechenden Metadaten fehlten.",
  "metadata-editor.merge-warning-message":                                "Diese Bearbeitung wird zwei {{things}} zusammenführen.",
  "metadata-editor.merge-warning-detail":                                 'Wenn du "{{thingA}}" auf "{{thingB}}" umbenennst, werden diese in nur "{{thingB}}" zusammengeführt. Willst du das wirklich?',
  "metadata-editor.cannot-edit-currently-playing-song-warning":           'Du kannst nicht den Song bearbeiten, der gerade abgespielt wird.',

  // database column names
  "column.artist_name":                                                   "Künstler",
  "column.artist_bio":                                                    "Biografie",
  "column.artist_photo":                                                  "Foto",
  "column.artist_date_added":                                             "Hinzugefügt",
  
  "column.release_title":                                                 "Album",
  "column.release_year":                                                  "Jahr",
  "column.release_artwork":                                               "Artwork",
  
  "column.track_title":                                                   "Titel",
  "column.track_date":                                                    "Jahr",
  "column.track_num":                                                     "Track #",
  "column.track_disc":                                                    "Disc",
  "column.track_path":                                                    "Pfad",
  "column.track_duration":                                                "Länge",
  "column.track_duration_formatted":                                      "Länge",
  "column.track_file_type":                                               "Dateityp",
  "column.track_bitrate":                                                 "Bitrate",
  "column.track_codec":                                                   "Codec",
  "column.track_container":                                               "Container",
  "column.track_lossless":                                                "Verlustlos",
  "column.track_path":                                                    "Datei",
  "column.track_source":                                                  "Quelle",
  
  "column.playlist_name":                                                 "Name",
  "column.playlist_tags":                                                 "Schlagwörter",
  
  "column.genre_name":                                                    "Name",
  
  // media feed
  "media-feed.waiting-for-import-to-finish":                              "Warte auf Abschluss des Imports.",
  "media-feed.building-feed":                                             "Schaue Dinge nach",
  "media-feed.not-enough-music":                                          "Musikerkundung benötigt mindestens 10 Alben",
  "media-feed.settings-button":                                           "Balance",
  "media-feed.shuffle-music.title":                                       "Etwas gutes abspielen",
  "media-feed.random-album.title":                                        "Ein zufälliges Album abspielen",
  "media-feed.shuffle-artist.title":                                      "Spiele Songs von einem<br>Zufälligen Künstler",
  "media-feed.shuffle-music-genre.title":                                 "Spiele Songs aus einem<br>Zufälligen Genre",
  "media-feed.end":                                                       "Das war's, Leute!",
  "media-feed-block.top-tracks.title":                                    "Top Tracks",
  "media-feed-block.recently-played-music.title":                         "Kürzlich Gespielt",
  "media-feed-block.recently-played-music.no-content":                    "Höre ein bisschen Musik und sie taucht hier auf",
  "media-feed-block.recently-added-music.title":                          "Kürzlich Hinzugefügt",
  "media-feed-block.albums-with-favorites.title":                         "Alben mit Favoriten",
  "media-feed-block.albums-with-favorites.no-content":                    "Füge Songs zu deine Favoriten hinzu und ihre Alben tauchen hier auf",
  "media-feed-block.artist.top-albums-title":                             "Meistgespielte Alben",
  "media-feed-block.artist.top-tracks-title":                             "Meistgespielte Songs",
  "media-feed-block.artist.random-albums-title":                          "Ein paar zufällige Alben",
  "media-feed-block.artist.random-tracks-title":                          "Ein paar zufällige Songs",
  
  // media feed top picks sentence structures
  "media-feed-block.top-picks.title.default":                             "Musik für genau jetzt",
  "media-feed-block.top-picks.title.overnight-1":                         "Töne der Nacht",
  "media-feed-block.top-picks.title.overnight-2":                         "Musik für heute Nacht",
  "media-feed-block.top-picks.title.overnight-3":                         "Bleib' noch wach",
  "media-feed-block.top-picks.title.overnight-4":                         "Für die Nachteulen",
  "media-feed-block.top-picks.title.overnight-5":                         "Wachbleiben",
  "media-feed-block.top-picks.title.morning-1":                           "Ein guter Start in den Tag",
  "media-feed-block.top-picks.title.morning-2":                           "Morgenvibes",
  "media-feed-block.top-picks.title.morning-3":                           "Den Tag schwungvoll beginnen",
  "media-feed-block.top-picks.title.morning-4":                           "Morgenstimmung",
  "media-feed-block.top-picks.title.morning-5":                           "Los geht's",
  "media-feed-block.top-picks.title.afternoon-1":                         "Töne für den Nachmittag",
  "media-feed-block.top-picks.title.afternoon-2":                         "Mittagsmusik",
  "media-feed-block.top-picks.title.afternoon-3":                         "Spitzenenergie",
  "media-feed-block.top-picks.title.afternoon-4":                         "Fühl' den Nachmittag",
  "media-feed-block.top-picks.title.afternoon-5":                         "Mach' stark weiter",
  "media-feed-block.top-picks.title.evening-1":                           "Abendenergie",
  "media-feed-block.top-picks.title.evening-2":                           "Genau was du brauchst",
  "media-feed-block.top-picks.title.evening-3":                           "Runterkommen",
  "media-feed-block.top-picks.title.evening-4":                           "Für den Moment",
  "media-feed-block.top-picks.title.evening-5":                           "Für diesen Abend",
  
  
  /**
   * Cardinal Server
   */
  // general
  "server.app-name":                                                      "Cardinal Server",
  "server.location":                                                      "Adresse",
  "server.uptime":                                                        "Laufzeit",
  "server.quit-warning-title":                                            "Schließen Bestätigen",
  "server.quit-warning-body":                                             "Cardinal Server muss laufen damit andere Cardinal-Apps auf deine Medien zugreifen können. Bist du dir sicher, dass du Cardinal Server beenden willst?",
  
  // navigation
  "server.nav.overview":                                                  "Überblick",
  "server.nav.indexer":                                                   "Index",
  "server.nav.connected-devices":                                         "Geräte",
  "server.nav.settings":                                                  "Einstellungen",
  
  // overview
  "server.overview.title":                                                "Überblick",
  "server.status.title":                                                  "Status",
  "server.status.online":                                                 "Server ist online",
  "server.status.offline":                                                "Server ist offline",
  "server.status.connecting":                                             "Verbinde...",
  "server.status.loading":                                                "Lade...",
  

  "server.actions.title":                                                 "Aktionen",
  "server.actions.shut-down":                                             "Herunterfahren",
  
  // indexer
  "server.indexer.title":                                                 "Dateiindex",
  "server.index-controls.state.internal-error":                           "Beim Indexierungsdienst ist ein interner Fehler aufgetreten. Wirklich herzzerreißend. 😭",
  "server.index-controls.title":                                          "Steuerung",
  "server.index-controls.state.starting":                                 "Starte...",
  "server.index-controls.state.scanning":                                 "Scanne...",
  "server.index-controls.scanned-count":                                  "{{n}} Dateien gefunden",
  "server.index-controls.state.syncing":                                  "Synkronisiere Index...",
  "server.index-controls.syncing-message":                                "Vergleiche Einträge...",
  "server.index-controls.added-file-to-index":                            "Hinzugefügt",
  "server.index-controls.removed-file-from-index":                        "Entfernt",
  "server.index-controls.state.importing":                                "Indexiere...",
  "server.index-controls.imported-file":                                  "Indexiert",
  "server.index-controls.updated-file":                                   "Aktualisiert",
  "server.index-controls.skipped-file":                                   "Übersprungen",
  "server.index-controls.errored-file":                                   "Fehlgeschlagen",
  "server.index-controls.calculating-time-remaining":                     "Berechne Zeit...",
  "server.index-controls.importing-time-remaining":                       "{{time}} verbleibend",
  "server.index-controls.importing-time-remaining-almost-done":           "Fast fertig...",
  "server.index-controls.state.paused":                                   "Pausiert",
  "server.index-controls.state.finished":                                 "Indexierung abgeschlossen",
  
  // index stats
  "server.index-summary.new-files":                                       "Neue Dateien",
  "server.index-summary.new-files-explanation":                           "Dateien, die dieses mal zum ersten Mal gesehen wurden.",
  "server.index-summary.updated-files":                                   "Aktualisierte Dateien",
  "server.index-summary.updated-files-explanation":                       "Dateien, die seit dem letzten Mal verändert wurden.",
  "server.index-summary.skipped-files":                                   "Übersprungene Dateien",
  "server.index-summary.skipped-files-explanation":                       "Dateien, die sich seit dem letzten Mal nicht verändert haben und deshalb übersprungen wurden.",
  "server.index-summary.deleted-files":                                   "Gelöschte Dateien",
  "server.index-summary.deleted-files-explanation":                       "Dateien, die mal indexiert wurden, aber nicht mehr existieren und somit gelöscht wurden.",
  "server.index-summary.errored-files":                                   "Fehlgeschlagene Dateien",
  "server.index-summary.errored-files-explanation":                       "Dateien, bei deren Verarbeitung ein Fehler aufgetreten ist.",
  "server.index-summary.view-report":                                     "Bericht ansehen",
  "server.index-options.mode.name":                                       "Modus",
  "server.index-options.mode.desc":                                       "Der Schnellmodus wird nur neue Dateien hinzufügen und gelöschte entfernen. Der Tiefenmodus überprüft auch auf aktualisierte Dateimetadaten.",
  "server.index-options.mode.opts":                                       "Optionen",
  "server.index-options.mode.opt.quick":                                  "Schnell",
  "server.index-options.mode.opt.deep":                                   "Tief",
  
  // index stats
  "server.index-stats.title":                                             "Indexierte Dateien",
  "server.index-stats.music-files":                                       "Musikdateien",
  "server.index-stats.cinema-files":                                      "Filme & TV-Dateien",
  "server.index-stats.photo-files":                                       "Fotodateien",
  "server.index-stats.book-files":                                        "Buchdateien",
  
  // index directories
  "server.index-directories.title":                                       "Meine Ordner",
  "server.index-directories.subtitle":                                    "Ziehe Ordner in diese Box, um sie deinen Medien hinzuzufügen",
  "server.index-directories.remove-dir-title":                            "Einen Ordner zu entfernen, entfernt bis zur nächsten Indexierung nicht seinen Inhalt.",
  "server.index-directories.load-error":                                  "Konnte Ordner nicht laden.",
  "server.index-directories.no-dirs-warning":                             "Du hast derzeit indexierte Dateien, aber keine Ordner. Bei Ausführung leert dieser Vorgang den Index. Bist du dir sicher, dass du fortfahren willst?",
  
  // connected devices
  "server.connected-devices.title":                                       "Verbundene Geräte",
  "server.connected-devices.no-devices":                                  "Keine anderen Cardinal-Apps nutzen den Server.",
  "server.connected-devices.state.playing":                               "Spielt ab",
  "server.connected-devices.state.paused":                                "Pausiert",
  "server.connected-devices.state.stopped":                               "Spielt nichts ab",
  "server.connected-devices.method.reference-name":                       "Referenz",
  "server.connected-devices.method.reference-desc":                       `"Referenz"-Abspielen ist wenn der Server dem Client sagt wo die Datei liegt und der Client sie selbst abspielt.`,
  "server.connected-devices.method.stream-name":                          "Streamt",
  "server.connected-devices.method.stream-desc":                          "Der Server liest die Datei und streamt sie an den Client.",
  
  // connected device
  "server.connected-device.server.meta":                                  "Das ist die UI, die du gerade verwendest.",
  
  // settings
  "server.settings.title":                                                "Servereinstellungen",

  // apps
  "server.apps.title":                                                    "Apps",
  "server.apps.help.title":                                               "Client Apps verwenden",
  "server.apps.help":                                                     `<p>Dieser Server beinhalten Web-Apps, die mit Browsern auf PCs, Tablets und Smartphones verwendet werden können.</p>
                                                                           <p>Es sind auch native Installationsprogramme für Windows und macOS auf der <a href="https://cardinalapps.xyz" class="external">Cardinal-Webseite</a> verfügbar.</p>`,
  "server.apps.help.locations.title":                                     "Web-App-Adressen",
  "server.apps.help.location.music.prefix":                               "<strong>Musik</strong>",
}
