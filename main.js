const { app, BrowserWindow } = require('electron');
const path = require('path');
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

// pronta per partire parte
app.whenReady().then(() => {
  createWindow()
});

// quando viene chiusa
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
});

