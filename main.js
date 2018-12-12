//Cargar la aplicac de electron
const app = require('electron').app;
//Crear ventanas del SO
const BrowserWindow = require('electron').BrowserWindow;
//Ruta de los archivos del SO
const path = require('path');
//Cargarla como pag web 
const url = require('url');
//Declarar la variable de la ventana
let PantallaPrincipal;
//Constantes para imprimir en PDF
const electron = require('electron');
//Acceso al Sistema Operativo y Sistema de Archivos para poder construir el PDF
const fs = require('fs');
const os = require('os');
//Aplicar una constante para llamado interno/remoto
//IPC = Llamada a un procedimiento interno
const ipc = electron.ipcMain;
const shell = electron.shell;

function muestraPantallaPrincipal() {
    //Crear una pantalla vac;ia
    PantallaPrincipal = new BrowserWindow({
        width: 1080,
        height: 720
    });
    //Darle contenido a la pantalla
    PantallaPrincipal.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

}
app.on('ready', muestraPantallaPrincipal);
