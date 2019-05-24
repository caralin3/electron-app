'use strict';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var main_menu_1 = require("./controllers/main-menu");
var defaultProps = {
    height: 600,
    show: false,
    width: 800
};
var mainWindow;
var createWindow = function () {
    // Create the browser window.
    mainWindow = new electron_1.BrowserWindow(__assign({}, defaultProps));
    mainWindow.loadFile(path.join(__dirname, '../src/views/index.html'));
    mainWindow.once('ready-to-show', function () {
        mainWindow.show();
    });
    mainWindow.webContents.openDevTools();
    main_menu_1.setMainMenu();
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
};
electron_1.app.on('ready', createWindow);
// Quit when all windows are closed.
electron_1.app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});
//# sourceMappingURL=main.js.map