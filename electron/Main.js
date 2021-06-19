const { app, BrowserWindow } = require('electron')

function App() {
    const win = require('./CreateWindow.js')
    const tray = require('./Tray.js')
}

//only windows or linux

app.whenReady().then(App)

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit()
})