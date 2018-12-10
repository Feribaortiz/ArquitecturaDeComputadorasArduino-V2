<?php
    $idUsuario = $_POST["idusuario"];
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $edad = $_POST["edad"];
    $contraseña = $_POST["contraseña"];
    
    $servidor="localhost";
    $usuario = "root";
    $password="";
    $basedatos="museo";
    $conexion=mysqli_connect($servidor,$usuario,$password,$basedatos);

   
    $respuesta = false;

    $InsertaUsuario="insert into usuarios values(  $idUsuario,  '$nombre',  '$apellido',  $edad, $contraseña )";
    $InsertaEnLogin="insert into login values(  $idUsuario, $contraseña )";

    mysqli_query($conexion, $InsertaUsuario);

    if(mysqli_affected_rows($conexion) > 0 ){
        $respuesta = true;
    }

    $salida = array('respuesta' => $respuesta);
    print json_encode($salida);

    //Siguiente Query

    mysqli_query($conexion, $InsertaEnLogin);

    if(mysqli_affected_rows($conexion) > 0 ){
        $respuesta = true;
    }

    $salida2 = array('respuesta' => $respuesta);
    print json_encode($salida2);

?>