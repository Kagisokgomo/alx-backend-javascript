export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length); // Create an ArrayBuffer of specified length
  const dataView = new DataView(buffer);  // Create a DataView for the ArrayBuffer

  if (position < 0 || position >= length) {
    throw new Error('Position outside range'); // Throw an error if the position is invalid
  }

  dataView.setInt8(position, value); // Set the Int8 value at the specified position
  return dataView; // Return the DataView
}
