const {BrowserWindow}=require('electron').remote
const app=require('electron').app
const path=require('path')
const url=require('url')
var pantallaCrearUsuario;
var inicio = function(){
    var btnGrabar = document.getElementById('btnRegistro');
    btnGrabar.addEventListener('click', CrearUsuario);
    var btnGrabar = document.getElementById('btnInicio');
    btnGrabar.addEventListener('click', Login );
}
var CrearUsuario = function(){
    console.log('Hola');
    pantallaCrearUsuario = new BrowserWindow({width:1080,height:720})
    pantallaCrearUsuario.loadURL(url.format({
        pathname: path.join(__dirname,'PantallaAltaUsuario.html'),
        protocol: 'file',
        slashes: true
    }))
    pantallaCrearUsuario.show();
}
var Login = function(){
    console.log('Hola');
    pantallaCrearUsuario = new BrowserWindow({width:1080,height:720})
    pantallaCrearUsuario.loadURL(url.format({
        pathname: path.join(__dirname,'PantallaLogin.html'),
        protocol: 'file',
        slashes: true
    }))
    pantallaCrearUsuario.show();
}

window.addEventListener('DOMContentLoaded',inicio,false);