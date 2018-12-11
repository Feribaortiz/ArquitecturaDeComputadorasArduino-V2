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
    .then(datos=>datos.json() )
    .then(datos=>{
        if(datos.respuesta == true){
            alert('Usuario guardado con exito');
        }else{
            alert('No se pudieron guardar los datos');
        }
    })

}

var btnGrabar = document.getElementById('btnGrabar');
btnGrabar.addEventListener('click', grabar);