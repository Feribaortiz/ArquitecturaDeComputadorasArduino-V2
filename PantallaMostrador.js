var pos = localStorage.getItem("pos")
var id = localStorage.getItem("id")
var posmostrador = pos;
var pantallaDetalles;
var idBillete;
var pantallaPiezas;
var f;
var num;
var btnMonedas = document.getElementsByClassName('btnPagina')
var btnFav = document.getElementsByClassName('btnFav')
var idusuario = JSON.parse(localStorage.getItem('idusuario'));
const {
    BrowserWindow
} = require('electron').remote
const app = require('electron').app
const path = require('path')
const url = require('url')
var myarray;
const inicio = function () {
    var link;
    const data = new FormData();
    data.append('idusuario', idusuario);
    fetch('http://localhost/phpMuseo/consultaFavoritos.php', {
            method: 'post',
            body: data
        })
        .then(datos => datos.json())
        .then(datos => {
            console.log(datos);
            myarray = new Array(datos.usuario.length);
            for (let i = 0; i < datos.usuario.length; i++) {
                console.log(datos.usuario.length);
                myarray[i] = datos.usuario[i].ncontrol;
            }
            console.log(myarray);
            if (datos.usuario.length == 0) {
                sinFavoritos();
            } else {
                conFavoritos();
            }
        })

}

window.addEventListener('DOMContentLoaded', inicio, false);
var sinFavoritos = function () {

    var url = "http://museobillete.azurewebsites.net/api/expo/"
    console.log(url + id);
    fetch(url + id)
        .then(datos => datos.json())
        .then(datos => {
            let art = "";
            f = datos;
            var x = -1;
            for (let i = 0; i < datos.mostradores[pos].grupos.length; i++) {
                const mos = datos.mostradores[pos].grupos[i];
                console.log(datos.mostradores[pos].grupos[i])
                num = datos.mostradores[pos].grupos[i].piezas.length;
                dat = datos.mostradores[pos].grupos[i].piezas[0].detallesUrl;
                console.log(dat);
                art += `
            <article class="abajoIzquierda">
                <img src="${mos.imagenFondoUrl}" class="imgFoto">
            </article>
            <article class="abajoDerecha">
                <h4 class="titulo">${mos.titulo}</h4>
                <button value="${num}" class="btnPagina" id="${i}" >Entrar</button>
            </article>
            <article class="abajoIzquierda">
            <button value="0" class="btnFav" id="${i}" >agregar a favoritos</button>
            </article>
            <hr>
            <br>
            `;

            }
            document.getElementById('abajo').innerHTML = art;
            console.log(btnMonedas.length);

            for (let i = 0; i < btnMonedas.length; i++) {
                btnMonedas[i].addEventListener('click', entraMoneda)
            }

            for (let i = 0; i < btnMonedas.length; i++) {
                btnFav[i].addEventListener('click', favorito)
            }
        });

}
var conFavoritos = function () {
    var url = "http://museobillete.azurewebsites.net/api/expo/"
    console.log(url + id);
    fetch(url + id)
        .then(datos => datos.json())
        .then(datos => {
            let art = "";
            f = datos;
            var x = -1;
            for (let i = 0; i < datos.mostradores[pos].grupos.length; i++) {
                const mos = datos.mostradores[pos].grupos[i];
                console.log(datos.mostradores[pos].grupos[i])
                num = datos.mostradores[pos].grupos[i].piezas.length;
                dat = datos.mostradores[pos].grupos[i].piezas[0].detallesUrl;
                console.log(dat);
                var a = myarray.includes(dat);
                console.log(a);
                if (a == true) {
                    x = 1;
                } else {
                    x = 0;
                }
                console.log(x);
                if (x == 1) {
                    art += `
            <article class="abajoIzquierda">
                <img src="${mos.imagenFondoUrl}" class="imgFoto">
            </article>
            <article class="abajoDerecha">
                <h4 class="titulo">${mos.titulo}</h4>
                <button value="${num}" class="btnPagina" id="${i}" >Entrar</button>
            </article>
            <article class="abajoIzquierda">
            <button value="0" class="btnFav" id="${i}" >Favorito</button>
            </article>
            <hr>
            <br>
            `;
                } else {
                    art += `
            <article class="abajoIzquierda">
                <img src="${mos.imagenFondoUrl}" class="imgFoto">
            </article>
            <article class="abajoDerecha">
                <h4 class="titulo">${mos.titulo}</h4>
                <button value="${num}" class="btnPagina" id="${i}" >Entrar</button>
            </article>
            <article class="abajoIzquierda">
            <button value="0" class="btnFav" id="${i}" >Añadir a Favoritos</button>
            </article>
            <hr>
            <br>
            `;
                }
            }
            document.getElementById('abajo').innerHTML = art;
            console.log(btnMonedas.length);

            for (let i = 0; i < btnMonedas.length; i++) {
                btnMonedas[i].addEventListener('click', entraMoneda)
            }

            for (let i = 0; i < btnMonedas.length; i++) {
                btnFav[i].addEventListener('click', favorito)
            }
        });

}

var entraMoneda = function () {
    console.log(this.id);
    localStorage.setItem("posgrupo", this.id)
    localStorage.setItem("posmostrador", posmostrador)
    localStorage.setItem("pos", 0)
    idBillete = this.id;
    var bool = this.value;
    console.log(num)
    console.log(num == 1)
    if (num == 1) {
        muestraDetalles();
    } else {
        entraPieza();
    }
}


var entraPieza = function () {
    pantallaPiezas = new BrowserWindow({
        width: 1080,
        height: 720
    })
    pantallaPiezas.loadURL(url.format({
        pathname: path.join(__dirname, 'pantallaPiezas.html'),
        protocol: 'file',
        slashes: true
    }))
    pantallaPiezas.show();
}

var muestraDetalles = function () {
    pantallaDetalles = new BrowserWindow({
        webPreferences: {
            preload: "./pantallaDetalles.js",
            nodeIntegration: false
        }
    });

    const link = f.mostradores[posmostrador].grupos[idBillete].piezas[0].detallesUrl;
    pantallaDetalles.loadURL(link)

    pantallaDetalles.show();

}

var favorito = function () {
    idBillete = this.id;
    var btn = document.getElementsByClassName('btnFav')
    var codigoRelacion = 0;

    if (btn.value == '0')
        btn.value = '1';
    else btn.value = '0';

    if (btn.value == '0')
        btn.innerHTML = "No es favorito"

    //Link de los detalles
    var link = f.mostradores[posmostrador].grupos[idBillete].piezas[0].detallesUrl;
    console.log(idusuario);
    console.log(link);
    console.log(idBillete);

    const data = new FormData();
    data.append('codigoRelacion', codigoRelacion);
    data.append('idusuario', idusuario);
    data.append('idPieza', link);

    fetch('http://localhost/phpMuseo/favoritos.php', {
        method: 'post',
        body: data
    })
    inicio();
}
