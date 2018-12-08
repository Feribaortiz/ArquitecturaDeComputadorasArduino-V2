var id = localStorage.getItem("id")
var pantallaMostrador;
var btnMostrador = document.getElementsByClassName('btnMostrador')
const {BrowserWindow}=require('electron').remote
const path=require('path')
const url=require('url')



const inicio = function(){
    var url ="http://museobillete.azurewebsites.net/api/expo/"
    fetch(url+id)
    .then(datos=>datos.json())
    .then(datos => {
        let art= "";
        console.log(datos);
        for(let i = 0; i<datos.mostradores.length; i++){
            const vit = datos.mostradores[i];
            art +=`
            <article class="abajoIzquierda">
                <img src="${vit.imagenFondoUrl}" class="imgFoto">
            </article>
            <article class="abajoDerecha">
                <h4>${vit.titulo}</h4>
                <button class="btnMostrador" value="${i}" >Entrar ${vit.titulo}</button>
            </article>
            <hr>
            <br>
            `;
        }
        document.getElementById('abajo').innerHTML = art;

        for(let i=0;i<btnMostrador.length;i++){
            btnMostrador[i].addEventListener('click',entraMostrador)
        }
    });
}

window.addEventListener('DOMContentLoaded',inicio,false);


var entraMostrador = function(){
    localStorage.setItem("id",this.id)
    pantallaMostrador = new BrowserWindow({width:1080,height:720})
    pantallaMostrador.loadURL(url.format({
        pathname: path.join(__dirname,'PantallaMostrador.html'),
        protocol: 'file',
        slashes: true
    }))
    pantallaMostrador.show();
}