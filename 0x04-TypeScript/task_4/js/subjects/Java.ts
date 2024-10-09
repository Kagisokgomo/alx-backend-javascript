// task_4/js/subjects/Java.ts

namespace Subjects {
  // Using declaration merging to add an optional attribute
  export interface Teacher {
    experienceTeachingJava?: number; // optional attribute for teaching experience in Java
  }

  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingJava ? 
        `Available Teacher: ${this.teacher.firstName}` : 
        'No available teacher';
    }
  }
}
