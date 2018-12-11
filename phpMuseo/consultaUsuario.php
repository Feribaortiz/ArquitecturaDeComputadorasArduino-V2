<?php
    header('Access-Control-Allow-Origin: *');
    $idUsuario = $_POST["idusuario"];
    $contraseña = $_POST["contra"];    

    $servidor="localhost";
    $usuario = "root";
    $password="";
    $basedatos="museo";
    $conexion=mysqli_connect($servidor,$usuario,$password,$basedatos);
    $consulta=sprintf("SELECT * FROM usuarios WHERE idusuario = %s and contrasena =%s",$idUsuario,$contraseña);
    $resultado = mysqli_query($conexion, $consulta);
    $filas = mysqli_num_rows($resultado);
    $salida = array();
    if(mysqli_num_rows($resultado) >= 0){
        while($registro = mysqli_fetch_array($resultado)){
                $nombre=$registro["idusuario"];
                $ncontrol  = $registro["contrasena"];
                $usuario =  array('nombre'=> $nombre,'ncontrol' => $ncontrol );
        }       
    }
    $salidaJSON = array('usuario' => $usuario);
        print json_encode($salidaJSON);
?>