export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList }, // Use spread syntax to copy employeesList
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length; // Count number of departments
    },
  };
}
