var posgrupo = localStorage.getItem("pos")
var posmostrador = localStorage.getItem("posmostrador")
var id = localStorage.getItem("id")

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
          console.log(datos.mostradores[posmostrador].grupos[posgrupo].piezas[0]);
        for(let i = 0; i<datos.mostradores[posmostrador].grupos[posgrupo].piezas.length; i++){
            const mos = datos.mostradores[posmostrador].grupos[posgrupo].piezas[i];
            art +=`
            <article class="abajoIzquierda">
                <img src="${mos.imagenFondoUrl}" class="imgFoto">
            </article>
            <article class="abajoDerecha">
                <h4 class="titulo">${mos.titulo}</h4>
                <button class="btnPagina" id="${i}" >Entrar</button>
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
    localStorage.setItem("pos",this.id)
    localStorage.setItem("posgrupo",posgrupo)
    localStorage.setItem("posmostrador",posmostrador)
    pantallaDetalles = new BrowserWindow({width:1080,height:720})
    console.log("http://museobillete.azurewebsites.net/Piezas/Details/BIL.MEX.M2")
    console.log(f);
    const link = f.mostradores[posmostrador].grupos[posgrupo].piezas[this.id].detallesUrl;
    pantallaDetalles.loadURL(link)
    pantallaDetalles.show();
}