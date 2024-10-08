export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error("Cannot process"); // Check if the argument is not a Map
  }

  for (const [key, value] of map.entries()) { // Iterate through the entries of the Map
    if (value === 1) { // If the quantity is 1
      map.set(key, 100); // Update the quantity to 100
    }
  }
}
