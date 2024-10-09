// task_4/js/subjects/Cpp.ts

namespace Subjects {
  // Using declaration merging to add an optional attribute
  export interface Teacher {
    experienceTeachingC?: number; // optional attribute for teaching experience in C
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingC ? 
        `Available Teacher: ${this.teacher.firstName}` : 
        'No available teacher';
    }
  }
}
