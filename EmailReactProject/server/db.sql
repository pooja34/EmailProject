drop database myquotes_db;
create database myquotes_db;

use myquotes_db;

create table user (
    userId integer primary key auto_increment,
    firstName varchar(50),
    lastName varchar(50),
    email varchar(50),
    password varchar(100),
   address text,
   phoneNo varchar(50),
    createdTime timestamp default CURRENT_TIMESTAMP
);

create table quotes (
    quoteId integer primary key auto_increment,
    author varchar(20),
    quotecontents text,
    userId integer,
   FOREIGN KEY (userId) REFERENCES user(userId),
    createdTime timestamp default CURRENT_TIMESTAMP
);

create table favorites (
    favId integer primary key auto_increment,
    quoteId integer,
    userId integer,
     FOREIGN KEY (quoteId) REFERENCES quotes(quoteId),
      FOREIGN KEY (userId) REFERENCES user(userId),
      status boolean
);

