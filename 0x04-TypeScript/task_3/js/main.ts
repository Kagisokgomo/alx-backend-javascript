// task_3/js/main.ts

/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud'; // Import everything from crud.js

// Create an object of type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Call the insertRow function
const newRowID: RowID = CRUD.insertRow(row);

// Create an updatedRow with age
const updatedRow: RowElement = { firstName: 'Guillaume', lastName: 'Salva', age: 23 };

// Call the updateRow and deleteRow functions
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
