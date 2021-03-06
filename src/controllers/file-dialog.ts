import { remote } from 'electron';
import * as $ from 'jQuery';

const fs = remote.require('fs');

const openDialog = () => {
  remote.dialog.showOpenDialog(
    remote.getCurrentWindow(),
    {
      filters: [{ name: 'Images', extensions: ['png', 'jpg'] }],
      properties: ['openFile', 'multiSelections']
    },
    filePaths => {
      if (filePaths) {
        filePaths.forEach(file => {
          // read image (note: use async in production)
          const _img = fs.readFileSync(file).toString('base64');
          const [_ext] = file.split('.');
          const _out = `<img src="data:image/${_ext};base64,${_img}" />`;
          const _target = document.getElementById('image_container');
          _target.insertAdjacentHTML('beforeend', _out);
        });
      }
      return;
    }
  );
};

let count = 0;
$('#click-counter').text(count.toString());
$('#countbtn').on('click', () => {
  count += 1;
  $('#click-counter').text(count);
  openDialog();
});
