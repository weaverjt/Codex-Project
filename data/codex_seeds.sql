/* Prop data to test server, database, api, etc. */
/* 
INSERT INTO tracker_proto (id, flagWord, tally) VALUES (1,"Nate",12);
INSERT INTO tracker_proto (id, flagWord, tally) VALUES (2,"Nessah",7);
INSERT INTO tracker_proto (id, flagWord, tally) VALUES (3,"Lidia",4);
INSERT INTO tracker_proto (id, flagWord, tally) VALUES (4,"Deimos",6);
INSERT INTO tracker_proto (id, flagWord, tally) VALUES (5,"Aiden",9);
INSERT INTO tracker_proto (id, flagWord, tally) VALUES (6,"Pike",20);
 */
 INSERT INTO tracker_proto (flagWord, tally) VALUES ("Nate",12);
INSERT INTO tracker_proto (flagWord, tally) VALUES ("Nessah",7);
INSERT INTO tracker_proto (flagWord, tally) VALUES ("Lidia",4);
INSERT INTO tracker_proto (flagWord, tally) VALUES ("Deimos",6);
INSERT INTO tracker_proto (flagWord, tally) VALUES ("Aiden",9);
INSERT INTO tracker_proto (flagWord, tally) VALUES ("Pike",20);

select * from tracker_proto;