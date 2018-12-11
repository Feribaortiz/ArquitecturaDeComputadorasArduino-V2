window.ipc = require('ipc')

function agregarBoton(htmlID, texto, funcion) {
    console.log('funciona')
	var o=document.getElementById(htmlID);
	o.html+='<input type="button" value="'+texto+'" onclick="'+funcion+'">';
}

agregarBoton('miDiv', 'Saludar', 'alert(\'Hola!\')');
