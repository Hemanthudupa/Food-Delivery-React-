import { SWIGGY_URL } from "./constants";
export async function orderDetails() {
  let food = await fetch(SWIGGY_URL);
  food = await food.json();
  return food;
}
