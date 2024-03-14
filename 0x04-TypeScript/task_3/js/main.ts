/// <reference path="./crud.d.ts" />
import { RowElement, RowID } from './interface'
import * as CRUD from './crud';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
}

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement =  {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23
}

CRUD.updateRow(newRowID, row);
CRUD.deleteRow(newRowID)

