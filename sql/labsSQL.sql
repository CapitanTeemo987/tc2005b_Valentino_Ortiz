-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 20, 2026 at 03:24 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lab17`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `agregarPasswordCatalogo` (IN `p_nuevo_valor` VARCHAR(255))   BEGIN
    INSERT INTO passwords (valor) 
    VALUES (p_nuevo_valor);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `obtenerPrivilegiosUsuario` (IN `p_username` VARCHAR(50))   BEGIN
    SELECT p.descripcion_privilegios
    FROM usuario u
    JOIN tiene t ON u.username = t.id_usuario
    JOIN roles r ON t.id_rol = r.id_rol
    JOIN posee po ON r.id_rol = po.id_rol
    JOIN privilegios p ON po.id_privilegio = p.id_privilegios
    WHERE u.username = p_username;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `registrarUsuarioConRol` (IN `p_username` VARCHAR(50), IN `p_nombre` VARCHAR(50), IN `p_password` VARCHAR(100), IN `p_id_rol` INT)   BEGIN
    INSERT INTO usuario (username, nombre, password) 
    VALUES (p_username, p_nombre, p_password);
    
    INSERT INTO tiene (id_usuario, id_rol) 
    VALUES (p_username, p_id_rol);
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `passwords`
--

CREATE TABLE `passwords` (
  `id` int(11) NOT NULL,
  `valor` varchar(255) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `passwords`
--

INSERT INTO `passwords` (`id`, `valor`, `fecha`) VALUES
(1, '1234', '2026-03-07 22:14:32'),
(2, 'hola', '2026-03-07 22:41:21'),
(3, 'prueba´', '2026-03-07 22:41:24'),
(4, 'ultima prueba', '2026-03-07 23:12:59'),
(5, 'prueba con login', '2026-03-10 21:35:12'),
(6, 'prueba', '2026-03-10 21:37:49'),
(7, 'prueba', '2026-03-11 19:01:46'),
(8, 'caskncnassac', '2026-03-24 16:24:15'),
(9, 'dasdasdas', '2026-03-24 16:49:13'),
(10, 'nuevo con procedure', '2026-03-24 16:49:16'),
(11, 'sadasd', '2026-04-16 16:19:38'),
(12, 'dsadsa', '2026-04-16 16:21:07'),
(13, 'prueba ajax', '2026-04-16 16:22:20'),
(14, 'prueba ajax', '2026-04-16 16:30:10'),
(15, 'asdada', '2026-04-16 16:31:16'),
(16, '', '2026-04-16 16:31:17'),
(17, '', '2026-04-16 16:31:17'),
(18, '', '2026-04-16 16:31:18'),
(19, '', '2026-04-16 16:31:18');

--
-- Triggers `passwords`
--
DELIMITER $$
CREATE TRIGGER `antes_de_insertar_password` BEFORE INSERT ON `passwords` FOR EACH ROW BEGIN
    IF NEW.valor = '' THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Error: La contraseña no puede estar vacía.';
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `posee`
--

CREATE TABLE `posee` (
  `id_rol` int(11) NOT NULL,
  `id_privilegio` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posee`
--

INSERT INTO `posee` (`id_rol`, `id_privilegio`, `created_at`) VALUES
(1, 1, '2026-03-11 17:44:21'),
(1, 2, '2026-03-11 17:44:21'),
(3, 2, '2026-03-11 17:44:33');

-- --------------------------------------------------------

--
-- Table structure for table `privilegios`
--

CREATE TABLE `privilegios` (
  `id_privilegios` int(11) NOT NULL,
  `descripcion_privilegios` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `privilegios`
--

INSERT INTO `privilegios` (`id_privilegios`, `descripcion_privilegios`, `created_at`) VALUES
(1, 'usar_ruta_auth', '2026-03-11 17:39:26'),
(2, 'solo_vista_labs', '2026-03-11 17:40:18');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id_rol` int(11) NOT NULL,
  `descripcion_rol` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id_rol`, `descripcion_rol`, `created_at`) VALUES
(1, 'administrador', '2026-03-11 17:37:55'),
(3, 'user', '2026-03-11 17:39:54');

-- --------------------------------------------------------

--
-- Table structure for table `tiene`
--

CREATE TABLE `tiene` (
  `id_usuario` varchar(50) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tiene`
--

INSERT INTO `tiene` (`id_usuario`, `id_rol`, `created_at`) VALUES
('admin', 1, '2026-03-11 17:43:45'),
('procedure', 3, '2026-03-24 16:28:33'),
('prueba_rol_automatico', 3, '2026-03-11 18:44:12'),
('valentino123', 3, '2026-03-11 17:43:45');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `username` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`username`, `nombre`, `password`) VALUES
('admin', 'admin', '$2b$12$nuHUBzD7pmgw2sE6qfa58ey88pY2pcxAlQ7/dU8Wo88VylTAoz/c6'),
('Manuel', 'prueba2', '$2b$12$JZUluVf2yhp9mey2/RM4MOBxuUMlSQu7ZcdAUNDgUgIPuLxxst1he'),
('procedure', 'procedure', '$2b$12$WBE8r303hdH.Jge2TG7sMefkRWdwyorZIBIDn/HQrXIroIoBtq71e'),
('prueba3', 'prueba3', '$2b$12$/lRxQXAM8NLZUq1ZQmB0Eur5Ndfr0AHxTYw41skegrTsH/MUUPShW'),
('prueba_rol_automatico', 'prueba_rol_automatico', '$2b$12$pQJuFpfM9ZLQwG6EBLz3H.Mf5FmemH9kOlxA3xLh1nRZFDNULIcQ2'),
('valentino123', 'Valentino', '$2b$12$1CMJDMgQd.GQCtcUGX9EYuUQT0terzCsaya5z4pxaE37VSL92GyRi');

--
-- Triggers `usuario`
--
DELIMITER $$
CREATE TRIGGER `antes_de_insertar_usuario` BEFORE INSERT ON `usuario` FOR EACH ROW BEGIN
    -- Convierte el nombre a mayúsculas automáticamente
    SET NEW.nombre = UPPER(NEW.nombre);
    
    -- Elimina espacios en blanco accidentales al inicio o final del username
    SET NEW.username = TRIM(NEW.username);
END
$$
DELIMITER ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `passwords`
--
ALTER TABLE `passwords`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posee`
--
ALTER TABLE `posee`
  ADD PRIMARY KEY (`id_rol`,`id_privilegio`),
  ADD KEY `id_privilegio` (`id_privilegio`);

--
-- Indexes for table `privilegios`
--
ALTER TABLE `privilegios`
  ADD PRIMARY KEY (`id_privilegios`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indexes for table `tiene`
--
ALTER TABLE `tiene`
  ADD PRIMARY KEY (`id_usuario`,`id_rol`),
  ADD KEY `id_rol` (`id_rol`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `passwords`
--
ALTER TABLE `passwords`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `privilegios`
--
ALTER TABLE `privilegios`
  MODIFY `id_privilegios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posee`
--
ALTER TABLE `posee`
  ADD CONSTRAINT `posee_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id_rol`),
  ADD CONSTRAINT `posee_ibfk_2` FOREIGN KEY (`id_privilegio`) REFERENCES `privilegios` (`id_privilegios`);

--
-- Constraints for table `tiene`
--
ALTER TABLE `tiene`
  ADD CONSTRAINT `tiene_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`username`),
  ADD CONSTRAINT `tiene_ibfk_2` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id_rol`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
