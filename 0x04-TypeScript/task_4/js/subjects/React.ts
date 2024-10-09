// task_4/js/subjects/React.ts

namespace Subjects {
  // Using declaration merging to add an optional attribute
  export interface Teacher {
    experienceTeachingReact?: number; // optional attribute for teaching experience in React
  }

  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingReact ? 
        `Available Teacher: ${this.teacher.firstName}` : 
        'No available teacher';
    }
  }
}
