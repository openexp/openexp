const electron = require('electron');
const app = electron.app; // Module to control application life
const BrowserWindow = electron.BrowserWindow; // Module to create native browser window.

var mainWindow = null;

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function () {

    // Initialize the window to our specified dimensions
    mainWindow = new BrowserWindow({ width: 1200, height: 900 });

    // Tell Electron where to load the entry point from
    mainWindow.loadURL('file://' + __dirname + '/../client/index.html');

    /** COMMENT OUT LINE BELOW FOR PRODUCTION */
    mainWindow.openDevTools();

    // Clear out the main window when the app is closed
    mainWindow.on('closed', function () {

        mainWindow = null;

    });

});
