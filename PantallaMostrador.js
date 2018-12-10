var pos = localStorage.getItem("pos")
var id = localStorage.getItem("id")
var posmostrador = pos;
var pantallaDetalles;
var pantallaPiezas;
var f;
var num;
var btnMonedas = document.getElementsByClassName('btnPagina')
const {BrowserWindow}=require('electron').remote
const app=require('electron').app
const path=require('path')
const url=require('url')
const inicio = function(){
    var url ="http://museobillete.azurewebsites.net/api/expo/"
    console.log(url+id);
      fetch(url+id)
    .then(datos=>datos.json())
    .then(datos => {
        let art= "";
          f = datos;
        console.log(datos.mostradores[0].grupos[0])
        for(let i = 0; i<datos.mostradores[pos].grupos.length; i++){
            const mos = datos.mostradores[pos].grupos[i];
            num = datos.mostradores[pos].grupos[i].piezas.length;
            art +=`
            <article class="abajoIzquierda">
                <img src="${mos.imagenFondoUrl}" class="imgFoto">
            </article>
            <article class="abajoDerecha">
                <h4 class="titulo">${mos.titulo}</h4>
                <button value="${num}" class="btnPagina" id="${i}" >Entrar</button>
            </article>
            <hr>
            <br>
            `;
        }
        document.getElementById('abajo').innerHTML = art;
        console.log(btnMonedas.length);
        
        for(let i=0;i<btnMonedas.length;i++){
            btnMonedas[i].addEventListener('click',entraMoneda)
        }
    });

}

window.addEventListener('DOMContentLoaded',inicio,false);

var entraMoneda = function(){
    console.log(this.id);
    localStorage.setItem("posgrupo",this.id)
    localStorage.setItem("posmostrador",posmostrador)
    localStorage.setItem("pos",0)
    var bool = this.value;
    console.log(num)
    console.log(num == 1)
    if(num == 1){
        muestraDetalles();
       } else{
           entraPieza();
       }
}


var entraPieza = function(){
    pantallaPiezas = new BrowserWindow({width:1080,height:720})
    pantallaPiezas.loadURL(url.format({
        pathname: path.join(__dirname,'pantallaPiezas.html'),
        protocol: 'file',
        slashes: true
    }))
    pantallaPiezas.show();
}

var muestraDetalles = function(){
    pantallaDetalles = new BrowserWindow({width:1080,height:720})
    console.log("http://museobillete.azurewebsites.net/Piezas/Details/BIL.MEX.M2")
    console.log(f);
    const link = f.mostradores[posmostrador].grupos[pos].piezas[0].detallesUrl;
    pantallaDetalles.loadURL(link)
    pantallaDetalles.show();
}


