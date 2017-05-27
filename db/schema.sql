-- allows easy local db setup
USE burgers_db;

CREATE TABLE burgers (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(45) NULL,
  devoured BOOLEAN DEFAULT FALSE,
  date TIMESTAMP,
  PRIMARY KEY (id)
);