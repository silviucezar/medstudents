import { app, BrowserWindow } from 'electron';

class ElectronApp {

    public static start() {
        app.whenReady().then(() => {
            const win = new BrowserWindow({
                center: true,
                minWidth: 360,
                minHeight: 640,
                width: 800,
                height: 600,
                webPreferences: {
                    nodeIntegration: true
                }
            });
            win.loadFile('client/index.html');
        });
    }
}

ElectronApp.start();