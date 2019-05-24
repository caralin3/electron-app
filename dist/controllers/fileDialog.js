"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var $ = require("jQuery");
var fs = electron_1.remote.require('fs');
function openDialog() {
    electron_1.remote.dialog.showOpenDialog(electron_1.remote.getCurrentWindow(), {
        filters: [{ name: 'Images', extensions: ['png', 'jpg'] }],
        properties: ['openFile', 'multiSelections']
    }, function (filePaths) {
        if (filePaths) {
            filePaths.forEach(function (file) {
                //read image (note: use async in production)
                var _img = fs.readFileSync(file).toString('base64');
                var _ext = file.split('.')[0];
                var _out = "<img src=\"data:image/" + _ext + ";base64," + _img + "\" />";
                var _target = document.getElementById('image_container');
                _target.insertAdjacentHTML('beforeend', _out);
            });
        }
        return;
    });
}
var count = 0;
$('#click-counter').text(count.toString());
$('#countbtn').on('click', function () {
    count++;
    $('#click-counter').text(count);
    openDialog();
});
//# sourceMappingURL=fileDialog.js.map