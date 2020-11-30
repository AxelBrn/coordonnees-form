DROP TABLE IF EXISTS customers;

CREATE TABLE customers 
( 
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    firstname varchar(50),
    lastname varchar(50),
    date_naissance DATE, 
    mail varchar(100), 
    adresse varchar(255), 
    ville varchar(150), 
    cp varchar(5), 
    CONSTRAINT PK_Customers PRIMARY KEY (id) 
)ENGINE=INNODB ENCRYPTED=YES ENCRYPTION_KEY_ID=1;