const {
    BrowserWindow
} = require('electron').remote
const app = require('electron').app
const path = require('path')
const url = require('url')
var inicio = function () {
    var btnGrabar = document.getElementById('btnLogin');
    btnGrabar.addEventListener('click', Login);
}

var Login = function () {
    var idUs = document.getElementById('idusuario').value;
    var contr = document.getElementById('contra').value;
    const data = new FormData();
    data.append('idusuario', idUs);
    data.append('contra', contr);
    fetch('http://localhost/phpMuseo/consultaUsuario.php', {
            method: 'post',
            body: data
        })
        .then(datos => datos.json())
        .then(datos => {
            console.log(datos);
            var dID = datos.usuario.nombre;
            var dContra = datos.usuario.ncontrol;
            let rt = "";
            console.log(dID);
            console.log(idUs);
            if (idUs == dID) {
                console.log("Hols")
                localStorage.setItem('idusuario', JSON.stringify(idUs));
                entrarPantallaInicial();
                window.close();
            }
        })
}
var entrarPantallaInicial = function () {
    localStorage.setItem("id", this.id)
    PantallaInicial = new BrowserWindow({
        width: 1080,
        height: 720
    })
    PantallaInicial.loadURL(url.format({
        pathname: path.join(__dirname, 'PantallaInicial.html'),
        protocol: 'file',
        slashes: true
    }))
    PantallaInicial.show();
}
window.addEventListener('DOMContentLoaded', inicio, false);
