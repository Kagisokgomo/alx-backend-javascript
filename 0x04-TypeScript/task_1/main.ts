// task_1/js/main.ts

// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional attribute
  location: string;
  [key: string]: any; // Allow additional properties with any key
}

// Create an example teacher object
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // Additional property
};

// Log the teacher object to the console
console.log(teacher3);


// task_1/js/main.ts

// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional attribute
  location: string;
  [key: string]: any; // Allow additional properties with any key
}

// Define the Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number; // Required attribute
}

// Create an example teacher object
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // Additional property
};

// Log the teacher object to the console
console.log(teacher3);

// Create an example director object
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17, // Required attribute for Directors
};

// Log the director object to the console
console.log(director1);


// task_1/js/main.ts

// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional attribute
  location: string;
  [key: string]: any; // Allow additional properties with any key
}

// Define the Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number; // Required attribute
}

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string; // Function signature
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Create an example teacher object
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // Additional property
};

// Log the teacher object to the console
console.log(teacher3);

// Create an example director object
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17, // Required attribute for Directors
};

// Log the director object to the console
console.log(director1);

// Test the printTeacher function
console.log(printTeacher("John", "Doe")); // Expected output: "J. Doe"

// task_1/js/main.ts

// Define the interface for the constructor of the StudentClass
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Define the StudentClass
class StudentClass {
  // Private properties to store first name and last name
  private _firstName: string;
  private _lastName: string;

  // Constructor to initialize the properties
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  // Method that simulates working on homework
  workOnHomework(): string {
    return "Currently working";
  }

  // Method that returns the student's first name
  displayName(): string {
    return this._firstName;
  }
}

// Example usage
const student = new StudentClass("Guillaume", "Salva");
console.log(student.displayName()); // Expected output: "Guillaume"
console.log(student.workOnHomework()); // Expected output: "Currently working"

