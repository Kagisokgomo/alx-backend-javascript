export default function createIteratorObject(report) {
  let allEmployees = [];
  
  // Loop through each department in allEmployees and collect employees into a single array
  for (const department in report.allEmployees) {
    allEmployees = allEmployees.concat(report.allEmployees[department]);
  }

  // Return an iterator for the combined employee list
  return allEmployees[Symbol.iterator]();
}
