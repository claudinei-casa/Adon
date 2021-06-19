const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 300,
        height: 300,
        fullscreenable: false,
        frame: false,
        resizable: false,
    })

    win.loadFile('index.html')
}

//only windows or linux

// app.whenReady().then(() => {
//     createWindow()
// })

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit()
})
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function() {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})