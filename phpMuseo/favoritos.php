<?php
    header('Access-Control-Allow-Origin: *');
    $codigoRelacion = 0;
    $idusuario = $_POST["idusuario"];
    $idPieza = $_POST["idPieza"];
   
    
    $servidor="localhost";
    $usuario = "root";
    $password="";
    $basedatos="museo";
    $conexion=mysqli_connect($servidor,$usuario,$password,$basedatos);

   
    $respuesta = false;
    $InsertaFavorito=sprintf("insert into usuariofavoritos values(  %s,  '%s',  '%s')",$codigoRelacion,$idusuario,$idPieza);

    mysqli_query($conexion, $InsertaFavorito);

    if(mysqli_affected_rows($conexion) > 0 ){
        $respuesta = true;
    }

    $salida = array('respuesta' => $respuesta);
    print json_encode($salida);



   
?>