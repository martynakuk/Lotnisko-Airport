-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2024-01-23 15:15:51.948

-- tables
-- Table: Lot
CREATE TABLE Lot (
    IdLot integer  NOT NULL AUTO_INCREMENT,
    DataRozp date  NOT NULL,
    DataZak date  NOT NULL,
    Skad varchar(20)  NOT NULL,
    Dokad varchar(20)  NOT NULL,
    CONSTRAINT Lot_pk PRIMARY KEY (IdLot)
);

-- Table: Przelot
CREATE TABLE Przelot (
    IdSamolot integer  NOT NULL,
    IdLot integer  NOT NULL,
    Status varchar(20)  NOT NULL,
    LiniaLotnicza varchar(20)  NOT NULL,
    CONSTRAINT Przelot_pk PRIMARY KEY (IdSamolot,IdLot)
);

-- Table: Role
CREATE TABLE Role (
    IdRole int  NOT NULL,
    Rola varchar(20)  NOT NULL,
    CONSTRAINT Role_pk PRIMARY KEY (IdRole)
);

-- Table: Samolot
CREATE TABLE Samolot (
    IdSamolot integer  NOT NULL AUTO_INCREMENT,
    DataProdukcji date  NOT NULL,
    IloscMiejsc integer  NOT NULL,
    Model varchar(20)  NOT NULL,
    CONSTRAINT Samolot_pk PRIMARY KEY (IdSamolot)
);

-- Table: Uzytkownik
CREATE TABLE Uzytkownik (
    IdUzytkownik int  NOT NULL,
    Login varchar(20)  NOT NULL,
    Haslo varchar(20)  NOT NULL,
    IdRole int  NOT NULL,
    CONSTRAINT Uzytkownik_pk PRIMARY KEY (IdUzytkownik)
);

-- foreign keys
-- Reference: PrzelotLot (table: Przelot)
ALTER TABLE Przelot ADD CONSTRAINT PrzelotLot FOREIGN KEY PrzelotLot (IdLot)
    REFERENCES Lot (IdLot);

-- Reference: PrzelotSamolot (table: Przelot)
ALTER TABLE Przelot ADD CONSTRAINT PrzelotSamolot FOREIGN KEY PrzelotSamolot (IdSamolot)
    REFERENCES Samolot (IdSamolot);

-- Reference: Uzytkownik_Role (table: Uzytkownik)
ALTER TABLE Uzytkownik ADD CONSTRAINT Uzytkownik_Role FOREIGN KEY Uzytkownik_Role (IdRole)
    REFERENCES Role (IdRole);

-- End of file.

