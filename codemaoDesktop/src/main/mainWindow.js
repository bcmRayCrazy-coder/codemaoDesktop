import BrowserWinHandler from './BrowserWinHandler'
import { ipcMain } from 'electron';

const winHandler = new BrowserWinHandler({
    height: 600,
    width: 1000,
    frame: false,
    webPreferences: {
        nodeIntegration: true,
        // webSecurity: false,
        // plugins: true,
        // sandbox: true,
        // nativeWindowOpen: true,
        contextIsolation: false
    }
})

winHandler.onCreated(_browserWindow => {
    winHandler.loadPage('/');
    _browserWindow.resizable = false;
    ipcMain.on('window-close', () => {
        _browserWindow.close();
        process.exit(114514);
    });
    ipcMain.on('window-minimize', () => {
        _browserWindow.minimize();
    });
    // Or load custom url
    // _browserWindow.loadURL('https://google.com')
})

export default winHandler