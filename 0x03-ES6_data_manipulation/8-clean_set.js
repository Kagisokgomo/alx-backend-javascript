export default function cleanSet(set, startString) {
  if (startString === '') return ''; // Return an empty string if startString is empty

  return Array.from(set) // Convert the set to an array
    .filter(value => value.startsWith(startString)) // Filter values that start with startString
    .map(value => value.slice(startString.length)) // Remove startString from each value
    .join('-'); // Join the remaining values with '-'
}
