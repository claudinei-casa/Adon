const { BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 600,
        height: 600,
        fullscreenable: false,
        frame: false,
        resizable: false,
        show: true,

    })

    win.loadFile('index.html')

    return win
}

module.exports = createWindow()