var id = localStorage.getItem("id")


const inicio = function(){
    var url ="http://museobillete.azurewebsites.net/"
    fetch(url+"Piezas/Details/BIL.MEX.M21")
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
                <button class="btnVitrina" value="${i}" >Entrar ${vit.titulo}</button>
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

