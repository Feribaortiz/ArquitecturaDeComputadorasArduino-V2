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
        
        for(let i = 0; i<datos.mostradores[pos].grupos.length; i++){
            const mos = datos.mostradores[pos].grupos[i];
            console.log(datos.mostradores[pos].grupos[i])
            num = datos.mostradores[pos].grupos[i].piezas.length;
            art +=`
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
        document.getElementById('abajo').innerHTML = art;
        console.log(btnMonedas.length);
        
        for(let i=0;i<btnMonedas.length;i++){
            btnMonedas[i].addEventListener('click',entraMoneda)
        }

        for(let i=0;i<btnMonedas.length;i++){
            btnFav[i].addEventListener('click',favorito)
        }
    });

}

window.addEventListener('DOMContentLoaded',inicio,false);

var entraMoneda = function(){
    console.log(this.id);
    localStorage.setItem("posgrupo",this.id)
    localStorage.setItem("posmostrador",posmostrador)
    localStorage.setItem("pos",0)
    idBillete = this.id;
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

var valor = true
var favorito = function(){
    var btn = document.getElementsByClassName('btnFav')
    
  if (btn.value == '0') 
      btn.value = '1';
  else btn.value = '0'; 

  console.log(btn.value);

  if (btn.value == '0') 
      btn.innerHTML ="No es favorito"

       console.log(idusuario);
    
        const data = new FormData();
        data.append('idusuario', idusuario);
       
    
    
        fetch('http://localhost/phpMuseo/agregaUsuario.php',{
            method: 'post',
            body: data
        })
    }





