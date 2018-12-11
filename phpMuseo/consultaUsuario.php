<?php
    header('Access-Control-Allow-Origin: *');
    
    $servidor="localhost";
    $usuario = "root";
    $password="";
    $basedatos="museo";
    $conexion=mysqli_connect($servidor,$usuario,$password,$basedatos);
    $resultado = mysqli_query($conexion, "SELECT * FROM usuarios");
    $salida = array();
    if(mysqli_num_rows($resultado) > 0){
        while($registro = mysqli_fetch_array($resultado,MYSQLI_ASSOC)){
            array_push($salida, $registro);
            print json_encode($salida);
        }
            
    }
    print json_encode($salida);
    die();
?>