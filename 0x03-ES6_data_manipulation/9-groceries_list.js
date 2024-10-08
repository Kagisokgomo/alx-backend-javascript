export default function groceriesList() {
  const groceries = new Map(); // Create a new Map
  groceries.set('Apples', 10); // Set items and quantities
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);
  
  return groceries; // Return the Map
}
