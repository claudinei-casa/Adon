const { app } = require('electron')
const controlWindow = require('./Controls.js')

function App() {
    const win = require('./CreateWindow.js')
    const tray = require('./Tray.js')
    const { toggle } = controlWindow(win, tray)
    tray.on('click', toggle)
}
app.whenReady().then(App)
app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit()
})