var id = localStorage.getItem("id")
var pos = localStorage.getItem("pos")

const inicio = function(){
    var url ="http://museobillete.azurewebsites.net/api/expo/"
    console.log(url+id);
    fetch(url+id)
    .then(datos=>datos.json())
    .then(datos => {
        let art= "";
        console.log('aiuda');
        console.log(id);
        console.log(pos);
        console.log(datos.mostradores[0].grupos[1])
        console.log(datos.mostradores[0].grupos[1].unico)
        console.log(datos.mostradores[0].grupos[1].piezas[0])
        for(let i = 0; i<datos.mostradores[0].grupos.length; i++){
            const mos = datos.mostradores[0].grupos[i];
            art +=`
            <article class="abajoIzquierda">
                <img src="${mos.imagenFondoUrl}" class="imgFoto">
            </article>
            <article class="abajoDerecha">
                <h4>${mos.titulo}</h4>
                <button value="${mos.unico}" class="btnMonedas" id="${i}" >Entrar</button>
            </article>
            <hr>
            <br>
            `;
        }
        console.log(btnMonedas.length);
        
        for(let i=0;i<btnMonedas.length;i++){
            btnMonedas[i].addEventListener('click',entraMoneda)
        }
    });

}

window.addEventListener('DOMContentLoaded',inicio,false);
