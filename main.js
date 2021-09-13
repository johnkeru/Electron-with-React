const {BrowserWindow, app, ipcMain, Notification} = require('electron')
const path = require('path')

const isDev = !app.isPackaged;

app.on('ready', () => {
    const window = new BrowserWindow({
        width: 600, height: 450,
        icon: __dirname+'/img/noises.png',
        darkTheme: true,
        hasShadow: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js'),
        }
    });

    window.loadFile('./public/index.html');
    window.webContents.openDevTools();
    window.on('close', () => app.quit());    
})
/*
require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
})*/

if(isDev){
    ipcMain.on('notify', (_, message) => {
        new Notification({
            title: 'Notification',
            body: message,
            sound: './build/bell.wav',
            icon: './img/noises.png' 
        }).show();
    })
}


app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit();
})
