export default function createEmployeesObject(departmentName, employees) {
    return {
        [departmentName]: employees, // Use computed property name for dynamic keys
    };
}
