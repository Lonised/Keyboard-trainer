const { app, BrowserWindow } = require('electron');

let win;

app.whenReady().then(() => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: `${__dirname}/preload.js`
        }
    });
    win.loadFile('index.html');
});