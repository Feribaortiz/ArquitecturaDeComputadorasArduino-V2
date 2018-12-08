var id = localStorage.getItem("id")


const inicio = function(){
    var url ="http://museobillete.azurewebsites.net/api/expo/"
    fetch(url+id)
    .then(datos=>datos.json())
    .then(datos => {
        let art= "";
        console.log('aiuda');
        console.log(id);
        console.log(datos);
        for(let i = 0; i<datos.mostradores.length; i++){
            const vit = datos.mostradores[i][i];
            art +=`
            <article class="abajoIzquierda">
                <img src="${vit.imagenFondoUrl}" class="imgFoto">
            </article>
            <article class="abajoDerecha">
                <h4>${vit.titulo}</h4>
              
            </article>
            <hr>
            <br>
            `;
        }
        document.getElementById('abajo').innerHTML = art;

        for(let i=0;i<btnVitrina.length;i++){
            btnVitrina[i].addEventListener('click',entraMostrador)
        }
    });

}

window.addEventListener('DOMContentLoaded',inicio,false);


