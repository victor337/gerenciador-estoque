CREATE SCHEMA IF NOT EXISTS `gerenciador_estoque` DEFAULT CHARACTER SET utf8;
USE `gerenciador_estoque`;

CREATE TABLE IF NOT EXISTS `gerenciador_estoque`.`products` (
  `id` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `valueItem` VARCHAR(255) NOT NULL,
  `quantity` TINYINT NULL DEFAULT 1,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `gerenciador_estoque`.`users` (
  `id` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `pass` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;