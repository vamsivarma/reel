// Basic init

const path = require('path');
const electron = require('electron')
const {app, BrowserWindow} = electron

// Let electron reloads by itself when webpack watches changes in ./app/
//require('electron-reload')(__dirname)

// To avoid being garbage collected
let mainWindow

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        webPreferences: {
          webSecurity: false
        }
      });

    //let winURL = path.resolve(`file://${__dirname}/app/index.html`)

    mainWindow.loadURL(`file://${__dirname}/index.html`)

})
