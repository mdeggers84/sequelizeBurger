CREATE DATABASE sequelizeBurgersDB;

USE sequelizeBurgersDB;

CREATE TABLE `Burgers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(255) NOT NULL,
  `devoured` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `CustomerId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `Customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
);
