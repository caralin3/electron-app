"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var isWindows = process.platform === 'win32';
exports.setMainMenu = function () {
    var template = [
        {
            label: isWindows ? 'File' : electron_1.app.getName(),
            submenu: [
                {
                    label: isWindows ? 'Exit' : "Quit " + electron_1.app.getName(),
                    accelerator: isWindows ? 'Ctrl+Q' : 'CmdOrCtrl+Q',
                    click: function () {
                        electron_1.app.quit();
                    }
                }
            ]
        },
        {
            label: 'Edit',
            submenu: [
                { role: 'undo' },
                { role: 'redo' },
                { type: 'separator' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' },
                { role: 'selectall' }
            ]
        }
    ];
    var menu = electron_1.Menu.buildFromTemplate(template);
    electron_1.Menu.setApplicationMenu(menu);
};
//# sourceMappingURL=main-menu.js.map