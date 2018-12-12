<?php
    header('Access-Control-Allow-Origin: *');
    $idUsuario = $_POST["idusuario"];
    

    $servidor="localhost";
    $usuario = "root";
    $password="";
    $basedatos="museo";
    $A = array();
    $conexion=mysqli_connect($servidor,$usuario,$password,$basedatos);
    $consulta=sprintf("SELECT * FROM `usuariofavoritos`WHERE idusuario = '%s'",$idUsuario);
    $resultado = mysqli_query($conexion, $consulta);
    $filas = mysqli_num_rows($resultado);
    $salida = array();
    if(mysqli_num_rows($resultado) >= 0){
        while($registro = mysqli_fetch_array($resultado)){
                $nombre=$registro["idusuario"];
                $ncontrol  = $registro["idPieza"];
                $A[] =  array('nombre'=> $nombre,'ncontrol' => $ncontrol );
            
        }       
    }
    $salidaJSON = array('usuario' => $A);
        print json_encode($salidaJSON);
?>
