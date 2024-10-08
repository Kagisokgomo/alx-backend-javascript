export default function hasValuesFromArray(set, array) {
  return array.every(value => set.has(value)); // Check if every element in the array exists in the set
}
