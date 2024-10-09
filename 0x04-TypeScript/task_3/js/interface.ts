// task_3/js/interface.ts

// Define RowID as a type equal to number
export type RowID = number;

// Define RowElement interface with firstName, lastName, and optional age
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}
