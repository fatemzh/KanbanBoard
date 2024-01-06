const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Charge le fichier index.html local
  win.loadFile('./index.html');
}

app.whenReady().then(createWindow);
