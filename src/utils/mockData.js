
export async function orderDetails() {
  let food = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  food = await food.json();
  return food;
}