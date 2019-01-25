/* The basic database set up---will need
    -A place to store new data from the tackerApi
    -user array
    -client information [username, email, password, codex files]
 */

/*
Example:
________________________
 CREATE TABLE employees (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(50),
  location varchar(50),
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

INSERT INTO employees (id, name, location) VALUES
(1, 'Jasmine', 'Australia'),
(2, 'Jay', 'India'),
(3, 'Jim', 'Germany'),
(4, 'Lesley', 'Scotland');
_________________________ 
*/


CREATE TABLE Flagged_Terms (
    word varchar(50),
    total int(100),
/*    location (within the text--- i.e. Page 1, Par 3)   */

)






