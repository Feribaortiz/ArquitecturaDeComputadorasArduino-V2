const {BrowserWindow}=require('electron').remote
const app=require('electron').app
const path=require('path')
const url=require('url')
var link =""
var pantallaVitrina;

var btnVitrina = document.getElementsByClassName('btnVitrina')


const inicio = function(){
    fetch('http://museobillete.azurewebsites.net/api/expo/')
    .then(datos=>datos.json())
    .then(datos => {
        let art= "";
        console.log(datos);
        for(let i = 0; i<datos.length; i++){
            const vit = datos[i];
            art +=`
            <article class="abajoIzquierda">
                <img src="${vit.imagenFondoUrl}" class="imgFoto">
                <h4>${vit.titulo}</h4>
                <button class="btnVitrina" id="${vit.id}" >Entrar ${vit.titulo}</button>
            </article>
       
                
          
            <hr>
            <br>
            `;
        }
        document.getElementById('abajo').innerHTML= art;
        
        for(let i=0;i<btnVitrina.length;i++){
            btnVitrina[i].addEventListener('click',entraVitrina)
        }
    });
}

var entraVitrina = function(){
    localStorage.setItem("id",this.id)
    pantallaVitrina = new BrowserWindow({width:1080,height:720})
    pantallaVitrina.loadURL(url.format({
        pathname: path.join(__dirname,'PantallaVitrina.html'),
        protocol: 'file',
        slashes: true
    }))
    pantallaVitrina.show();
}

window.addEventListener('DOMContentLoaded',inicio,false);