-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-12-2018 a las 03:07:02
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `museo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `login`
--

CREATE TABLE `login` (
  `idusuario` varchar(100) NOT NULL,
  `contrasena` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `login`
--

INSERT INTO `login` (`idusuario`, `contrasena`) VALUES
('1500', 'michelitamotxa'),
('25', 'Victoria'),
('1', 'asdq'),
('1', '1'),
('2', '2'),
('3', '3'),
('4', '4'),
('5', '5'),
('6', '6'),
('7', '7'),
('8', '8'),
('9', '9'),
('0', '0'),
('1', '5'),
('12', '4'),
('12', '676'),
('9', '09'),
('2', '2'),
('2', '2'),
('3', '3'),
('1', '4'),
('3', '2'),
('12', '5'),
('2', '67'),
('45', '0'),
('222', '22222'),
('144', '4'),
('144', '4'),
('144', '4'),
('22', '4'),
('2', '2'),
('2', '2'),
('555', 'pass'),
('15171249', 'pass'),
('15171249', 'passw'),
('15171249', 'passw'),
('999', 'con'),
('100', ''),
('100', ''),
('100', ''),
('5000', ''),
('5000', ''),
('1517', 'con'),
('15171243', 'nolohace'),
('15171242', 'nolohace'),
('0', 'presidente'),
('0', 'presidente'),
('0', 'me'),
('2000', 'me'),
('2000', 'me'),
('8700', 'noo'),
('8701', 'noo'),
('8702', 'noo'),
('8703', 'noo'),
('0', 'noo'),
('zureichenden', 'con'),
('ozuna', 'negar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuariofavoritos`
--

CREATE TABLE `usuariofavoritos` (
  `codigoRelacion` int(11) NOT NULL,
  `idusuario` varchar(100) NOT NULL,
  `idPieza` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuariofavoritos`
--

INSERT INTO `usuariofavoritos` (`codigoRelacion`, `idusuario`, `idPieza`) VALUES
(0, '1517', 'http://museobillete.azurewebsites.net/Piezas/Details/BIL.MEX.M1'),
(0, '5000', 'http://museobillete.azurewebsites.net/Piezas/Details/BIL.MEX.M3'),
(0, '5000', 'http://museobillete.azurewebsites.net/Piezas/Details/BIL.MEX.M4'),
(0, '15171243', 'http://museobillete.azurewebsites.net/Piezas/Details/BIL.MEX.M1'),
(0, '0', 'http://museobillete.azurewebsites.net/Piezas/Details/BIL.MEX.M15'),
(0, 'ozuna', 'http://museobillete.azurewebsites.net/Piezas/Details/BIL.MEX.M1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idusuario` varchar(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `edad` int(11) NOT NULL,
  `contrasena` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idusuario`, `nombre`, `apellido`, `edad`, `contrasena`) VALUES
('100', 'fernando', 'ibarria', 21, 'anaid'),
('5000', 'no', 'sirve', 50, 'anaidun'),
('1500', 'michelle', 'ceja', 20, 'michelitamotxa'),
('25', 'victor', 'volado', 22, 'Victoria'),
('1', 'a', 'i', 21, 'asdq'),
('1', '1', '1', 1, '1'),
('2', '2', '2', 2, '2'),
('3', '3', '3', 3, '3'),
('4', '4', '4', 4, '4'),
('5', '5', '5', 5, '5'),
('6', '6', '6', 6, '6'),
('7', '7', '7', 7, '7'),
('8', '8', '8', 8, '8'),
('9', '9', '9', 9, '9'),
('0', '0', '0', 0, '0'),
('1', '2', '3', 4, '5'),
('12', '32', '4', 5, '4'),
('12', '3123', '7677', 7687, '676'),
('9', '0090', '0', 9, '09'),
('2', '2', '2', 2, '2'),
('2', '2', '2', 2, '2'),
('3', '3', '3', 3, '3'),
('1', '2', '2', 3, '4'),
('3', '2', '5', 4, '2'),
('12', '2', '3', 4, '5'),
('2', '34', '98', 98, '67'),
('45', '0', '0', 0, '0'),
('222', '22', '22', 22, '22222'),
('144', '4', '4', 4, '4'),
('144', '4', '4', 4, '4'),
('144', '4', '4', 4, '4'),
('22', '4', '4', 4, '4'),
('2', '2', '2', 2, '2'),
('2', '2', '2', 2, '2'),
('555', 'nuevo', 'usuario', 20, 'pass'),
('15171249', 'Oscar', 'Lizarraga', 22, 'pass'),
('15171249', 'Oscar', 'Lizarraga', 22, 'passw'),
('15171249', 'Oscar', 'Lizarraga', 22, 'passw'),
('999', 'uno', 'dos', 30, 'con'),
('1517', 'Ultimo', 'No', 22, 'con'),
('15171243', 'Fernando', 'Noinsertacero', 21, 'nolohace'),
('15171242', 'Fernando', 'Noinsertacero', 21, 'nolohace'),
('0', 'PeÃ±a', 'Nieto', 47, 'presidente'),
('lord', 'PeÃ±a', 'Nieto', 47, 'presidente'),
('karime', 'ka', 'ri', 23, 'me'),
('2000', 'ka', 'ri', 23, 'me'),
('2000', 'ajaa', 'nooo', 23, 'me'),
('8700', 'Que', 'Pasa', 25, 'noo'),
('8701', 'Que', 'Pasa', 25, 'noo'),
('8702', 'que', 's', 25, 'noo'),
('8703', 'que', 's', 25, 'noo'),
('mario', 'que', 's', 25, 'noo'),
('zureichenden', 'oscar', 'lizarraga', 22, 'con'),
('ozuna', 'no', 'telo', 55, 'negar');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
