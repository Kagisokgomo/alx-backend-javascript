export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter(student => student.location === city) // Filter by city
    .map(student => {
      const gradeObj = newGrades.find(grade => grade.studentId === student.id); // Find the grade for the student
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A' // Assign the grade or 'N/A'
      };
    });
}
