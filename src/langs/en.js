module.exports = {
  /**
   * Cardinal Desktop Clients
   */

  // string used for unit test - this must be the anglicised language name
  "unit-test-string":                                                     "English",

  // general aria
  "aria.label.albums.controls.order-by":                                  "Reorder your albums",
  "aria.label.artists.controls.order-by":                                 "Reorder your artists",
  "aria.label.tracks.controls.order-by":                                  "Reorder your songs",
  "aria.label.ui-listbox.remove-list-item":                               "Removes the item from this list",
  
  // object types
  "artist":                                                               "Artist", // new
  "artists":                                                              "Artists", // new
  "album":                                                                "Album", // new
  "albums":                                                               "Albums", // new
  "track":                                                                "Track", // new
  "tracks":                                                               "Tracks", // new
  "genre":                                                                "Genre", // new
  "genres":                                                               "Genres", // new
  "playlist":                                                             "Playlist", // new
  "playlists":                                                            "Playlists", // new

  // general
  "app-name":                                                             "Cardinal",
  "cardinalserver":                                                       "Cardinal Server",
  "cardinalserver-short":                                                 "Server",
  "cardinalmusic":                                                        "Cardinal Music",
  "cardinalmusic-short":                                                  "Music",
  "close":                                                                "Close",
  "save":                                                                 "Save", // new
  "reset":                                                                "Reset", // new
  "continue":                                                             "Continue", // new
  "cancel":                                                               "Cancel", // new
  "quit":                                                                 "Quit", // new
  "menu":                                                                 "Menu",
  "disc":                                                                 "Disc",
  "choose-file":                                                          "Choose file",
  "or":                                                                   "or",
  "of":                                                                   "of", // new
  "source-icon.local.title":                                              "This song comes from a file on your computer",
  "danger-confirm":                                                       "Are you sure? This cannot be undone.",
  "toggle-favorite":                                                      "Add/remove from favorites",
  "play-count":                                                           "Play count",
  "no-content":                                                           "No content",
  "year":                                                                 "Year",
  "play":                                                                 "Play",
  "version":                                                              "Version",

  // music app general
  "music-app.context-menu.group-name":                                    "Cardinal",
  "music-app.context-menu.settings":                                      "Settings",
  
  // system menu
  "system-menu.about":                                                    "About Cardinal",
  "system-menu.close-window":                                             "Close Window",
  "system-menu.check-for-updates":                                        "Check for updates...",
  "system-menu.back":                                                     "Back",
  "system-menu.forward":                                                  "Forward",
  "system-menu.settings":                                                 "Settings",
  "system-menu.quit":                                                     "Quit Cardinal",
  "system-menu.top-level.file":                                           "File",
  "system-menu.top-level.view":                                           "View",
  "system-menu.top-level.playback":                                       "Playback",
  "system-menu.top-level.help":                                           "Help", // new
  "system-menu.toggle-play-pause":                                        "Toggle Play/Pause",
  "system-menu.play":                                                     "Play",
  "system-menu.pause":                                                    "Pause",
  "system-menu.stop":                                                     "Stop",
  "system-menu.next":                                                     "Next",
  "system-menu.previous":                                                 "Previous",
  "system-menu.macos.hide":                                               "Hide",
  "system-menu.macos.unhide":                                             "Unhide",
  "system-menu.reset-zoom":                                               "Reset Zoom",
  "system-menu.zoom-in":                                                  "Zoom In",
  "system-menu.zoom-out":                                                 "Zoom Out",
  "system-menu.toggle-dev-tools":                                         "Developer Tools",
  "system-menu.top-level.window":                                         "Window",
  "system-menu.minimize":                                                 "Minimize",
  "system-menu.toggle-queue":                                             "Toggle Queue",
  "system-menu.show-welcome":                                             "Show Welcome Message",
  "system-menu.learn-more":                                               "Learn More",
  "system-menu.website":                                                  "Cardinal Website",
  "system-menu.attributions":                                             "Attributions",
  "system-menu.open-source":                                              "Open Source",
  "system-menu.terms-and-conditions":                                     "Terms and Conditions",
  "system-menu.privacy-policy":                                           "Privacy Policy",
  "system-menu.cut":                                                      "Cut",
  "system-menu.copy":                                                     "Copy",
  "system-menu.paste":                                                    "Paste",
  "system-menu.select-all":                                               "Select All",
  "system-menu.full-screen":                                              "Full Screen",
  "system-menu.reload":                                                   "Reload",
  "system-menu.front":                                                    "Front",
  "system-menu.window":                                                   "Window",
  
  // server-connect
  "server-connect.form-title":                                            "Connect to a Cardinal Server",
  "server-connect.form-field.host":                                       "Host",
  "server-connect.form-field.port":                                       "Port",
  "server-connect.form-submit":                                           "Connect",
  "server-connect.logo-title":                                            "Chrip chirp",
  "server-connect.help-c2a":                                              "How do I connect?",
  "server-connect.help-body":                                             `
                                                                          <p>To use this app, you must have <a href="https://cardinalapps.xyz/cardinal-server" class="external">Cardinal Server</a> running somewhere on your local area network.</p>
                                                                          <p>Once the server is running, the location information can be found in the server's <strong>Status</strong> widget, and it will look something like:</p>
                                                                          <code>192.168.0.0:0000</code>
                                                                          <p>The <strong>Host</strong> is the part to the left of the colon, usually it's an IP address.</p>
                                                                          <p>The <strong>Port</strong> is the part to the right of the colon, it's a number with up to 5 digits.</p>
                                                                          <p>The server that you connect to must continue running while using this app.</p>
                                                                          `,
  "server-connect.connection-failed":                                     "Server connection failed.<br>Is the server running on the local area network?",
  "server-connect.autoconnect-failed":                                    "Could not automatically reconnect to Cardinal Server.",
  
  // self updater
  "updater.ask-to-update.title":                                          "Update available",
  "updater.ask-to-update.msg":                                            "Would you like to update now? The app will restart.\n\n",
  "updater.ask-to-update.btn.yes":                                        "Update Now",
  "updater.ask-to-update.btn.no":                                         "Later",
  "updater.no-updates.title":                                             "No update available",
  "updater.no-updates.message":                                           "No update available.\n\nYou already have the latest version.",
  
  // general context menu
  "context-menu.inspect-element":                                         "Inspect Element",
  "context-menu.toggle-dev-tools":                                        "Developer Tools",

  // warnings/notifications/dialogues
  "media-keys-need-permission.notification.title":                        "Permission Required",
  "media-keys-need-permission.notification.message":                      "<p>Cardinal needs permission to use the media keys on your keyboard.</p><p>Restart the app after granting permission.</p>",
  "notification.cannot-load-music-file.message":                          "Could not play song.\n\n{{song}}\n\nContinue to next song?",
  
  // search
  "search-bar.placeholder":                                               "Name, title, year",
  "search-bar.context-menu.clear-history":                                "Clear Search Histroy",
  "search.group-title.tracks":                                            "Songs",
  "search.group-title.musicReleases":                                     "Releases",
  "search.group-title.artists":                                           "Artists",
  "search.group-title.genres":                                            "Genres",
  "search.group-title.playlists":                                         "Playlists",
  "search.no-results":                                                    "No results",
  
  // navigation sidebar
  "nav.music.explore":                                                    "Explore Music",
  "nav.music.title":                                                      "Music Library",
  "nav.music.artists":                                                    "Artists",
  "nav.music.releases":                                                   "Releases",
  "nav.music.tracks":                                                     "Songs",
  "nav.music.genres":                                                     "Genres",
  "nav.music.playlists":                                                  "Playlists",
  "nav.cinema.home-cinema":                                               "Home Cinema",
  "nav.cinema.title":                                                     "Tv & Movies",
  "nav.cinema.tv":                                                        "TV",
  "nav.cinema.movies":                                                    "Movies",
  "nav.cinema.genres":                                                    "Genres",
  "nav.cinema.channels":                                                  "Channels",
  
  // playlists
  "playlists.smart-playlist.top-songs.title":                             "Your Top Songs",
  "playlists.smart-playlist.recently-added.title":                        "Recently Added",
  
  // settings panel
  "settings.main-dot-menu":                                               "Settings",
  "settings.context-menu":                                                "Settings",
  "settings.main-title":                                                  "Settings",
  "settings.tab-name-general":                                            "General",
  "settings.tab-name-music-playback":                                     "Music Playback", // new
  "settings.tab-name-window":                                             "Window", // new
  "settings.tab-name-theme":                                              "Theme",
  "settings.tab-name-updates":                                            "Updates",
  "settings.tab-name-advanced":                                           "Advanced",
  "settings.language.title":                                              "Language",
  "settings.confirm-electron-quit":                                       "Confirm before quitting",
  "settings.local-files.title":                                           "Files on my Computer",
  "settings.local-files.instructions":                                    "Drag n' drop folders into the box to add them to your media.",
  "settings.local-files.importer-msg":                                    "New folders will automatically be imported after the settings are closed.",
  "settings.local-files.remove-folder-tooltip-message":                   "Cardinal won't check this folder anymore when refreshing the library",
  "settings.local-files.folder-structure-guide-opener":                   "Recommended folder structure", // new
  "settings.online-accounts.title":                                       "Cloud Music",
  "settings.online-accounts.instructions":                                "Optionally log into a cloud music service",
  "settings.online-accounts.spotify-login-with":                          "Log into your Spotify account",
  "settings.online-accounts.applemusic-login-with":                       "Log in with your Apple ID",
  "settings.online-accounts.googleplaymusic-login-with":                  "Log in with your Google account",
  "settings.online-accounts.logged-in-as":                                "Logged in as {{name}}",
  "settings.online-accounts.logout":                                      "Log out",
  "settings.factory-reset.title":                                         "Factory Reset",
  "settings.factory-reset.desc":                                          "Reset everything",
  "settings.factory-reset.confirm":                                       "This will reset only this Cardinal app, making it like it was just installed. \n\nNothing on the server will be effected, including playback history. To remove server data, use the server app.\n",
  "settings.color-theme.title":                                           "Colour Theme", // new
  "settings.color-theme.option.light":                                    "Light (beta)", // new
  "settings.color-theme.option.dark":                                     "Dark", // new
  "settings.accent-color.title":                                          "Accent Colour", // new
  "settings.notifications.title":                                         "Notifications", // new
  "settings.notifications.song-change-label":                             "When the song changes", // new
  "settings.music-playback.title":                                        "Music Playback Options", // new
  "settings.music-playback.always-load-whole-song":                       "Always load the whole song before playing it. This will add a significant delay when loading a new song, but will prevent intermittent buffering when files are being retrieved over a slow network connection.", // new
  "settings.custom-css.title":                                            "Custom CSS", // new
  "settings.custom-css.notice":                                           "Notice", // new
  "settings.custom-css.instructions":                                     "If you break something, press <code class='inline win32-only'>Ctrl+Alt+I</code><code class='inline darwin-only'>Cmd+Option+I</code> and run <code class='inline'>disableCustomCSS()</code> in the console.", // new
  "settings.developer.title":                                             "Developer", // new
  "settings.developer.enable-label":                                      "Enable Developer Mode", // new
  "settings.start-page.title":                                            "Start Page", // new
  "settings.updates.title":                                               "Updates", // new
  "settings.updates.auto-check-label":                                    "Automatically check for updates", // new
  "settings.updates.manual-check-label":                                  "Check now", // new
  "settings.window.title":                                                "Behaviour", // new
  "settings.window.autoclose-on-blur":                                    "Automatically close the window when focus is lost", // new
  
  // playback-controls
  "playback-controls.waveform-error-message":                             "Waveform not available",
  
  // breadcrumbs
  "breadcrumbs.explore":                                                  "Explore",
  "breadcrumbs.music-library":                                            "Music Library",
  "breadcrumbs.artist":                                                   "Artist",
  "breadcrumbs.album":                                                    "Album",
  "breadcrumbs.music-release":                                            "Release",
  "breadcrumbs.genres":                                                   "Genres",
  "breadcrumbs.genre":                                                    "Genre",
  "breadcrumbs.playlists":                                                "Playlists",
  "breadcrumbs.playlist":                                                 "Playlist",
  
  // artists view
  "view.artists.title":                                                   "Artists",
  
  // single artist
  "view.artist.favorite-tracks.title":                                    "Favorite Songs",
  "view.artist.most-played.title":                                        "Most Played Songs",
  "view.artist.release-type.albums":                                      "Albums",
  "view.artist.release-type.singles":                                     "Singles",
  "view.artist.release-type.eps":                                         "EPs",
  "view.artist.release-type.compilations":                                "Compilations",
  "view.artist.release-type.soundtrack":                                  "Soundtracks",
  "view.artist.release-type.live":                                        "Live",
  "view.artist.release-type.remix":                                       "Remixes",
  "view.artist.release-type.other":                                       "Other Releases",
  "view.artist.similar-artists.title":                                    "Similar Artists",
  
  // albums view
  "view.empty-message":                                                   "Add music",
  "view.albums.title":                                                    "Albums",
  "view.albums.control-group-filter-title":                               "Filter",
  "view.albums.control-group-filter-option-genre":                        "Genre",
  "view.albums.control-group.order.title":                                "Order",
  "view.albums.control-group.order.option.name":                          "Name",
  "view.albums.control-group.order.option.year":                          "Year",
  "view.albums.control-group.name-asc.aria-assertive-change-message":     "Albums sorted by name in ascending order",
  "view.albums.control-group.name-desc.aria-assertive-change-message":    "Albums sorted by name in descending order",
  "view.albums.control-group.year-asc.aria-assertive-change-message":     "Albums sorted by year in ascending order",
  "view.albums.control-group.year-desc.aria-assertive-change-message":    "Albums sorted by year in descending order",
  "view.artists.control-group.name-asc.aria-assertive-change-message":    "Artists sorted by name in ascending order",
  "view.artists.control-group.name-desc.aria-assertive-change-message":   "Artists sorted by name in descending order",

  // control group
  "control-group.cycle-button.name-asc-desc":                             "Order by name",
  "control-group.cycle-button.year-asc-desc":                             "Order by year",
  "control-group.asc":                                                    "Ascending",
  "control-group.desc":                                                   "Descending",

  // single album
  "view.album.artist.prefix":                                             "By ",
  "view.album.song-count":                                                "{{n}} songs",
  "view.album.related.title":                                             "Albums by ",
 
  // tracks view
  "view.tracks.title":                                                    "Songs",

  // genres view
  "view.genres.title":                                                    "Genres",
  
  // single genre view
  "view.genre.artist-grid-title":                                         "{{genre}} Artists",
  "view.genre.album-grid-title":                                          "{{genre}} Albums",
  
  // genre tag
  "genre-tag.context-menu.edit-genre":                                    "Edit Genre",

  // playlists view
  "view.playlists.title":                                                 "Playlists",
  
  // single playlist view
  "view.playlist.artists-in-playlist-title":                              "Artists in this Playlist",
  "view.playlist.albums-in-playlist-title":                               "Albums in this Playlist",
  "view.playlist.tracks-in-playlist-title":                               "Songs in this Playlist",
  "view.playlist.play-button-c2a":                                        "Play",
  
  // track list
  "track-list.empty-playlist":                                            "Empty Playlist",
  "track-table.playlist-stats.tracks":                                    "{{n}} <sub>songs</sub>",
  "track-table.playlist-stats.tracks-singular":                           "{{n}} <sub>song</sub>", // new

  // track block
  "track-block.context-menu.play-track":                                  "Play Song",
  "track-block.context-menu.play-next":                                   "Play Song Next",
  "track-block.context-menu.add-to-queue":                                "Add Song to Queue",
  "track-block.context-menu.add-to-playlist":                             "Add Song to Playlist",
  "track-block.context-menu.edit-track":                                  "Edit Song", // new
  "track-block.context-menu.remove-from-playlist":                        "Remove from Playlist",

  // artist block
  "artist-block.context-menu.shuffle-artist":                             "Shuffle Artist", // new
  "artist-block.context-menu.edit-artist":                                "Edit Artist", // new

  // album block
  "album-block.context-menu.group-name":                                  "Album",
  "album-block.context-menu.play-album":                                  "Play Album",
  "album-block.context-menu.play-next":                                   "Play Album Next",
  "album-block.context-menu.add-to-queue":                                "Add Album to Queue",
  "album-block.context-menu.add-to-playlist":                             "Add Album to Playlist",
  "album-block.context-menu.edit-album":                                  "Edit Album", // new
  
  // release metadata
  "release-metadata.artist":                                              "Artist", // new
  "release-metadata.year":                                                "Released", // new
  "release-metadata.average-bitrate":                                     "Average Bitrate", // new
  "release-metadata.file-type":                                           "Filetype", // new
  "release-metadata.file-types":                                          "Filetypes", // new
  "release-metadata.duration":                                            "Duration", // new

  // playlists
  "playlist-list.empty-message":                                          "Create Playlist",
  "playlist-list.form.create.button-title":                               "Create new Playlist",
  "playlist-list.form.create.name-label":                                 "Name",
  "playlist-list.form.create.submit-button":                              "Create",
  "playlist-block.context-menu.play":                                     "Play Playlist",
  "playlist-block.context-menu.play-next":                                "Play Playlist Next",
  "playlist-block.context-menu.add-to-queue":                             "Add Playlist to Queue",
  "playlist-block.context-menu.delete-playlist":                          "Delete Playlist",
  "playlist-block.context-menu.edit-playlist":                            "Edit Playlist",
  "playlist-block.track-count.suffix":                                    "songs",
  "playlist-block.track-count.suffix-singular":                           "song",

  // queue
  "queue.title":                                                          "Up Next",
  "queue.shuffling-title":                                                "Shuffling",
  "queue.num-in-queue":                                                   "{{n}} items",
  "queue.num-in-queue-singular":                                          "{{n}} item",
  "queue.btn.delete":                                                     "Empty",
  "queue.empty-message":                                                  "There's nothing coming up next",
  "queue.context-menu.group-name":                                        "Queue",
  "queue.context-menu.remove-from-queue":                                 "Remove from Queue",

  // ------------------------------ new translations ------------------------------

  // explore
  "view.explore.title":                                                   "Explore My Music",
  
  // attributions modal
  "open-source.title":                                                    "Open Source Software",
  "open-source.first-party":                                              `<p>These open source libraries were developed for Cardinal:</p>
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
  "open-source.third-party":                                              `<p>Cardinal relies on these third party open source projects:</p>
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
  
  "open-source.fonts":                                                    `<p>And these fonts:</p>
                                                                          <ul>
                                                                            <li><a href="https://fonts.google.com/specimen/Open+Sans" class="external">Open Sans</a></li>
                                                                            <li><a href="https://fonts.google.com/specimen/Yantramanav" class="external">Yantramanav</a></li>
                                                                            <li><a href="https://fontawesome.com/" class="external">Font Awesome</a></li>
                                                                          </ul>`,
  
  // about modal
  "about.body":                                                           `<p>Cardinal is designed and developed by <a href="https://github.com/somebeaver" class="external">somebeaver 🌴</a></p>
                                                                          <p>Get involved with the project on <a href="https://github.com/somebeaver/cardinal-project" class="external">Github</a> and <a href="https://old.reddit.com/r/cardinalapps/" class="external">Reddit</a></p>`,
  
  // folder structure guide modal
  "folder-structure-guide.title":                                         "Folder Structure Guide",
  "folder-structure-guide.desc-before-examples":                          `<p><strong>When importing files, Cardinal will always prioritize the embedded file metadata that exists.</strong></ul>
                                                                           <p>However, when metadata is missing, Cardinal will try to fill in the missing information using the surrounding folders and files.</p>
                                                                           <p>For the best import results, adhere to these folder structures.</p>`,
  "folder-structure-guide.example.music.title":                           "Music files",
  "folder-structure-guide.example.music.code.artist":                     "Artist Name",
  "folder-structure-guide.example.music.code.album":                      "Album Name",
  "folder-structure-guide.example.music.code.disc":                       "Disc 01 (or CD 01)",
  "folder-structure-guide.example.music.code.song":                       "01 - Song name.mp3",
  "folder-structure-guide.example.music.code.cover-art":                  "cover.jpg",
  "folder-structure-guide.supported-types.title":                         "Supported File Types",
  "folder-structure-guide.supported-types.music-files":                   "Music files",
  "folder-structure-guide.supported-types.artwork":                       "Album art",

  // metadata editor
  "metadata-editor.editing-artist.title":                                 "Editing Artist",
  "metadata-editor.editing-album.title":                                  "Editing Album",
  "metadata-editor.editing-track.title":                                  "Editing Song",
  "metadata-editor.editing-playlist.title":                               "Editing Playlist",
  "metadata-editor.editing-genre.title":                                  "Editing Genre",
  "metadata-editor.toggle-switch.also-update-file-metadata":              "Also update file metadata",
  "metadata-editor.toggle-switch.merge-should-overwrite":                 "Overwrite target when merging",
  "metadata-editor.toggle-switch.merge-should-overwrite-tooltip":         "When updating metadata makes two things merge (artists, movies, whatever), this determines if the values in this form will overwrite the other values.",
  "metadata-editor.api-update-failed":                                    "The update did not work",
  "metadata-editor.date.day":                                             "Day",
  "metadata-editor.date.month":                                           "Month",
  "metadata-editor.date.year":                                            "Year",
  "metadata-editor.total-discs-label":                                    "Of",
  "metadata-editor.genres":                                               "Genres",
  "metadata-editor.smart-fill-guess.tooltip":                             "While importing, Cardinal gusssed this value because the file was missing the appropriate metadata.",
  "metadata-editor.merge-warning-message":                                "This edit will merge two {{things}}.",
  "metadata-editor.merge-warning-detail":                                 'If you rename "{{thingA}}" to "{{thingB}}", they will be merged into just "{{thingB}}". Do you want to do this?',
  "metadata-editor.cannot-edit-currently-playing-song-warning":           'You cannot edit the currently playing song.',

  // database column names
  "column.artist_name":                                                   "Artist",
  "column.artist_bio":                                                    "Biography",
  "column.artist_photo":                                                  "Photo",
  "column.artist_date_added":                                             "Added",
  
  "column.release_title":                                                 "Album",
  "column.release_year":                                                  "Year",
  "column.release_artwork":                                               "Artwork",
  
  "column.track_title":                                                   "Title",
  "column.track_date":                                                    "Year",
  "column.track_num":                                                     "Track #",
  "column.track_disc":                                                    "Disc",
  "column.track_path":                                                    "Path",
  "column.track_duration":                                                "Duration",
  "column.track_duration_formatted":                                      "Duration",
  "column.track_file_type":                                               "File Type",
  "column.track_bitrate":                                                 "Bitrate",
  "column.track_codec":                                                   "Codec",
  "column.track_container":                                               "Container",
  "column.track_lossless":                                                "Lossless",
  "column.track_path":                                                    "File",
  "column.track_source":                                                  "Source",
  
  "column.playlist_name":                                                 "Name",
  "column.playlist_tags":                                                 "Tags",
  
  "column.genre_name":                                                    "Name",
  
  // media feed
  "media-feed.waiting-for-import-to-finish":                              "Waiting for import to finish, have a look around",
  "media-feed.building-feed":                                             "Looking things up",
  "media-feed.not-enough-music":                                          "Music exploration requires at least 10 albums",
  "media-feed.settings-button":                                           "Balance",
  "media-feed.shuffle-music.title":                                       "Play Something Good",
  "media-feed.random-album.title":                                        "Play a Random Album",
  "media-feed.shuffle-artist.title":                                      "Play songs From a<br>Random Artist",
  "media-feed.shuffle-music-genre.title":                                 "Play Songs From a<br>Random Genre",
  "media-feed.end":                                                       "That's all folks!",
  "media-feed-block.top-tracks.title":                                    "Top Tracks",
  "media-feed-block.recently-played-music.title":                         "Recently Played",
  "media-feed-block.recently-played-music.no-content":                    "Play some music and it'll appear here",
  "media-feed-block.recently-added-music.title":                          "Recently Added",
  "media-feed-block.albums-with-favorites.title":                         "Albums With Favorites",
  "media-feed-block.albums-with-favorites.no-content":                    "Add songs to your favorites and their albums will appear here",
  "media-feed-block.artist.top-albums-title":                             "Most Played Albums",
  "media-feed-block.artist.top-tracks-title":                             "Most Played Songs",
  "media-feed-block.artist.random-albums-title":                          "A Few Random Albums",
  "media-feed-block.artist.random-tracks-title":                          "A Few Random Songs",
  
  // media feed top picks sentence structures
  "media-feed-block.top-picks.title.default":                             "Music for right now",
  "media-feed-block.top-picks.title.overnight-1":                         "Late night tunes",
  "media-feed-block.top-picks.title.overnight-2":                         "Music for tonight",
  "media-feed-block.top-picks.title.overnight-3":                         "Keeping it going",
  "media-feed-block.top-picks.title.overnight-4":                         "For the night owls",
  "media-feed-block.top-picks.title.overnight-5":                         "Staying awake",
  "media-feed-block.top-picks.title.morning-1":                           "Starting the day",
  "media-feed-block.top-picks.title.morning-2":                           "Morning vibes",
  "media-feed-block.top-picks.title.morning-3":                           "Getting the day started",
  "media-feed-block.top-picks.title.morning-4":                           "Morning mood",
  "media-feed-block.top-picks.title.morning-5":                           "Lets do this",
  "media-feed-block.top-picks.title.afternoon-1":                         "Afternoon audio",
  "media-feed-block.top-picks.title.afternoon-2":                         "Midday music",
  "media-feed-block.top-picks.title.afternoon-3":                         "Peak energy",
  "media-feed-block.top-picks.title.afternoon-4":                         "Feel the afternoon",
  "media-feed-block.top-picks.title.afternoon-5":                         "Keep killing it",
  "media-feed-block.top-picks.title.evening-1":                           "Evening energy",
  "media-feed-block.top-picks.title.evening-2":                           "Just what you need",
  "media-feed-block.top-picks.title.evening-3":                           "Winding down",
  "media-feed-block.top-picks.title.evening-4":                           "For the moment",
  "media-feed-block.top-picks.title.evening-5":                           "For this evening",
  
  /**
   * Cardinal Server
   */
  // general
  "server.app-name":                                                      "Cardinal Server",
  "server.location":                                                      "Location",
  "server.uptime":                                                        "Uptime",
  "server.quit-warning-title":                                            "Quit Confirmation",
  "server.quit-warning-body":                                             "Cardinal Server must be running for other Cardinal apps to use your media. Are you sure you want to quit?",
  
  // navigation
  "server.nav.overview":                                                  "Overview",
  "server.nav.indexer":                                                   "Index",
  "server.nav.connected-devices":                                         "Devices",
  "server.nav.settings":                                                  "Settings",
  
  // overview
  "server.overview.title":                                                "Overview",
  "server.status.title":                                                  "Status",
  "server.status.online":                                                 "Server is online",
  "server.status.offline":                                                "Server is offline",
  "server.status.connecting":                                             "Connecting...",
  "server.status.loading":                                                "Loading...",
  

  "server.actions.title":                                                 "Actions",
  "server.actions.shut-down":                                             "Shut down",
  
  // indexer
  "server.indexer.title":                                                 "File Index",
  "server.index-controls.state.internal-error":                           "The indexing service encountered an internal error. This is heartbreaking. 😭",
  "server.index-controls.title":                                          "Controls",
  "server.index-controls.state.starting":                                 "Starting...",
  "server.index-controls.state.scanning":                                 "Scanning...",
  "server.index-controls.scanned-count":                                  "Found {{n}} files",
  "server.index-controls.state.syncing":                                  "Syncing index...",
  "server.index-controls.syncing-message":                                "Comparing items...",
  "server.index-controls.added-file-to-index":                            "Added",
  "server.index-controls.removed-file-from-index":                        "Removed",
  "server.index-controls.state.importing":                                "Indexing...",
  "server.index-controls.imported-file":                                  "Indexed",
  "server.index-controls.updated-file":                                   "Updated",
  "server.index-controls.skipped-file":                                   "Skipped",
  "server.index-controls.errored-file":                                   "Errored",
  "server.index-controls.calculating-time-remaining":                     "Calculating time...",
  "server.index-controls.importing-time-remaining":                       "{{time}} left",
  "server.index-controls.importing-time-remaining-almost-done":           "Almost done...",
  "server.index-controls.state.paused":                                   "Paused",
  "server.index-controls.state.finished":                                 "Indexing Complete",
  
  // index stats
  "server.index-summary.new-files":                                       "New files",
  "server.index-summary.new-files-explanation":                           "Files that were first seen on this indexing run.",
  "server.index-summary.updated-files":                                   "Updated files",
  "server.index-summary.updated-files-explanation":                       "Files that changed since the last time they were indexed.",
  "server.index-summary.skipped-files":                                   "Skipped files",
  "server.index-summary.skipped-files-explanation":                       "Files that haven't changed since the last time they were indexed, and were therefore skipped.",
  "server.index-summary.deleted-files":                                   "Deleted files",
  "server.index-summary.deleted-files-explanation":                       "Files that were once indexed, but now no longer exist, and were therefore removed from the index.",
  "server.index-summary.errored-files":                                   "Errored files",
  "server.index-summary.errored-files-explanation":                       "Files that produced an error while attempting to process their data.",
  "server.index-summary.view-report":                                     "View Report",
  "server.index-options.mode.name":                                       "Mode",
  "server.index-options.mode.desc":                                       "Quick mode will only add new files and remove deleted files from the index. Deep mode will also check for updated file metadata.",
  "server.index-options.mode.opts":                                       "Options",
  "server.index-options.mode.opt.quick":                                  "Quick",
  "server.index-options.mode.opt.deep":                                   "Deep",
  
  // index stats
  "server.index-stats.title":                                             "Indexed Files",
  "server.index-stats.music-files":                                       "Music files",
  "server.index-stats.cinema-files":                                      "Movies & TV files",
  "server.index-stats.photo-files":                                       "Photo files",
  "server.index-stats.book-files":                                        "Book files",
  
  // index directories
  "server.index-directories.title":                                       "My Folders",
  "server.index-directories.subtitle":                                    "Drag n' drop folders into the box to add them to your media",
  "server.index-directories.remove-dir-title":                            "Removing a folder does not remove its media until the next indexing run.",
  "server.index-directories.load-error":                                  "Couldn't load directories.",
  "server.index-directories.no-dirs-warning":                             "You currently have indexed files, but now have no folders. If allowed to run, this operation will deindex all your files. Are you sure you want to continue?",
  
  // connected devices
  "server.connected-devices.title":                                       "Connected Devices",
  "server.connected-devices.no-devices":                                  "No other Cardinal apps are using the server.",
  "server.connected-devices.state.playing":                               "Playing",
  "server.connected-devices.state.paused":                                "Paused",
  "server.connected-devices.state.stopped":                               "Not Playing",
  "server.connected-devices.method.reference-name":                       "Reference",
  "server.connected-devices.method.reference-desc":                       `"Reference" playback is when the server tells the client app where the media file is located, and the client plays it on its own.`,
  "server.connected-devices.method.stream-name":                          "Streaming",
  "server.connected-devices.method.stream-desc":                          "The server is reading the media file and streaming the data to the client.",
  
  // connected device
  "server.connected-device.server.meta":                                  "This is the UI that you are using right now.",
  
  // settings
  "server.settings.title":                                                "Server Settings",

  // apps
  "server.apps.title":                                                    "Apps",
  "server.apps.help.title":                                               "Using Client Apps",
  "server.apps.help":                                                     `<p>The Server includes web apps that can be used by browsers on your desktop, tablet, and smartphone.</p>
                                                                           <p>There are also native installers for macOS and Windows available on the <a href="https://cardinalapps.xyz" class="external">Cardinal website</a>.</p>`,
  "server.apps.help.locations.title":                                     "Web App Locations",
  "server.apps.help.location.music.prefix":                               "<strong>Music</strong>",
}