-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 11, 2026 at 06:55 PM
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
(6, 'prueba', '2026-03-10 21:37:49');

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
('prueba3', 'prueba3', '$2b$12$/lRxQXAM8NLZUq1ZQmB0Eur5Ndfr0AHxTYw41skegrTsH/MUUPShW'),
('valentino123', 'Valentino', '$2b$12$1CMJDMgQd.GQCtcUGX9EYuUQT0terzCsaya5z4pxaE37VSL92GyRi');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
