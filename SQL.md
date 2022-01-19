# Anteckningar
KÖR ALLT ME SEMICOLON
görs från början = sudo service mysql restart | !287
superuser = sudo mysql -u root |
användare = CREATE USER 'emil'@'localhost' IDENTIFIED BY 'emil'; |
ge tillstånd till användare = GRANT ALL PRIVILEGES ON *.* TO 'emil'@'localhost'; |
gå ut = exit
öppna sql = mysql -u emil -p
databasvisar = show databases;
? = use mysql
tabeller = show tables;
ta fram info från en tabell = SELECT * FROM 'tabell' | 
skapa en databas = create database te19;
byta databas = use te19;    
visa tabell/innehåll från databas = show tables;
??? = CREATE TABLE users (id INT UNSIGNED AUTO_INCREMENT, PRIMARY KEY(id)) ENGINE = innodb CHARACTER SET 'utf8mb4';
visa uppbyggnaden av tabellen, innehåll = describe users;
ändra på en table = ALTER TABLE users ADD name VARCHAR (140) NOT NULL;
lägger till password =ALTER TABLE users ADD password VARCHAR (255) NOT NULL;
inserta = INSERT INTO users (name) VALUES ('emil');