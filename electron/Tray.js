const { Tray } = require('electron')
const { resolve } = require('path')

const iconPath = resolve(__dirname, '../', 'assets', 'alarme.png')

function createTray() {
    const tray = new Tray(iconPath)
    tray.setToolTip('rebember')
    return tray
}

module.exports = createTray()