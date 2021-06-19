function controlWindow(win, tray) {
    function toggle() {
        if (win.isVisible()) {
            win.hide()
        } else {
            win.show()
                // win.maximize()
        }
    }

    return { toggle }
}
module.exports = controlWindow