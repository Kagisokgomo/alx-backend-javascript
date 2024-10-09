// task_4/js/subjects/Subject.ts

namespace Subjects {
  export class Subject {
    teacher!: Teacher; // attribute to store the teacher

    // setter method to assign a teacher
    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
