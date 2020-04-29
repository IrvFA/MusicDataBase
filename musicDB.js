import Dexie from 'dexie';

/*
Team Members:
Irving Fuentes Aguilera 
Jaime Orlando López Ramos
Joaquín Ríos Corvera
Jose Antonio Vazquez
Objective: Apply our DB knowledge to implement an indexed Database
*/

const musicDB = new Dexie("Irving's Music Palace Condesa"); // Declaration of our DB var

// Definition of tables with their respective
musicDB.version(1).stores({
    Client: '++id, name, phone_no, email',
    Label: '++id, name, country',
    


});

