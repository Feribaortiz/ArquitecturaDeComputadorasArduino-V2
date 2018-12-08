//Cargar la aplicac de electron
 const app=require('electron').app;
 //Crear ventanas del SO
 const BrowserWindow=require('electron').BrowserWindow;
 //Ruta de los archivos del SO
 const path=require('path');
 //Cargarla como pag web 
const url=require('url');
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
 function muestraPantallaPrincipal()
 {
	//Crear una pantalla vac;ia
	PantallaPrincipal=new BrowserWindow( {width:1080, height:720} );
 	//Darle contenido a la pantalla
	PantallaPrincipal.loadURL( url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file',
		slashes: true
	})
   );
 	
  }
 //Evento para PDF (Declaración)
ipc.on('print-to-pdf', function(event){
    const pdfPath = path.join(os.tmpdir(), 'print.pdf' )
    const win = BrowserWindow.fromWebContents(event.sender)
    win.webContents.printToPDF({}, function(error, data){
    if(error) throw error
    fs.writeFile(pdfPath, data, function(error){
        if(error){
            throw error
        }
         shell.openExternal('file://'+pdfPath)
        })
    })
})
  app.on('ready', muestraPantallaPrincipal); 