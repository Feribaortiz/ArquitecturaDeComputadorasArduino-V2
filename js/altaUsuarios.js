const {BrowserWindow}=require('electron').remote
const app=require('electron').app
const path=require('path')
const url=require('url')
var grabar = function(){
    var idUs=document.getElementById('idusuario').value;
    var no=document.getElementById('nombre').value;
    var ap=document.getElementById('apellido').value;
    var ed=document.getElementById('edad').value;
    var contr=document.getElementById('contra').value;

    const data = new FormData();
    data.append('idusuario', idUs);
    data.append('nombre', no);
    data.append('apellido', ap);
    data.append('edad', ed);
    data.append('contraseña', contr);


    fetch('http://localhost/phpMuseo/agregaUsuario.php',{
        method: 'post',
        body: data
    })
    muestraRegistro();
}
var btnGrabar = document.getElementById('btnGrabar');
btnGrabar.addEventListener('click', grabar);

var muestraRegistro = function(){
    var idUs=document.getElementById('idusuario').value;
    var contr=document.getElementById('contra').value;
    const data = new FormData();
    data.append('idusuario', idUs);
    data.append('contra', contr);
    fetch('http://localhost/phpMuseo/consultaUsuario.php',{
        method: 'post',
        body: data
    })
    .then(datos=>datos.json())
    .then(datos=>{
        console.log(datos);
        var dID = datos.usuario.nombre;
        var dContra = datos.usuario.ncontrol;
        let rt= "";
        console.log(dID);
        console.log(dContra);
        console.log(datos.length);
        if(idUs==dID){
           rt +=`
            <h4>Usuario dado de alta, favor de cerrar la ventana e iniciar sesion</h4>
            `;
            document.getElementById('abajo1').innerHTML= rt;
           }
    })
}
