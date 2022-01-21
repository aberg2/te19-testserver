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
skapa en tabell = CREATE TABLE 'table' (id INT UNSIGNED AUTO_INCREMENT, PRIMARY KEY(id)) ENGINE = innodb CHARACTER SET 'utf8mb4';
visa uppbyggnaden av tabellen, innehåll = describe 'table';
ändra på en table = ALTER TABLE 'table' ADD name VARCHAR (140) NOT NULL;
lägger till password =ALTER TABLE 'table' ADD password VARCHAR (255) NOT NULL;
inserta = INSERT INTO 'table' (name) VALUES ('emil');
ta bort fält =  alter table 'table' drop completed_at;
uppdatea fält = update tasks set completed=true, updated_at=now() where id=4;