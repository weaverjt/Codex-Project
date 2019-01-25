-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS codex_db;
-- Creates the "todolist" database --
CREATE DATABASE codex_db;


CREATE TABLE Tracking_Proto
    (
    /* id int(11) NOT NULL AUTO_INCREMENT, */
	flagWord varchar(50),
	tally int(50),
	PRIMARY KEY (id)
    );


