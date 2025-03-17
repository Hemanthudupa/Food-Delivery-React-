import { RestroCard } from "./RestroCard";
import { foodsData } from "../utils/mockData";
import { useState } from "react";
export const Body = () => {
  const [foodData, setFoodData] = useState(foodsData);
  const largestname=foodData.filter((ele) => {
    if (ele.strMeal.length > 10) {
      return ele;
    }
  });
  console.log(largestname);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setFoodData(largestname);
          }}
        >
          TOP RATED RESTUARENT
        </button>
      </div>
      <div className="restro-container">
        {/* <RestroCard img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/x4uyxvihmg8qa3pddkgf" resName="Meghana Foods" menu="Biriyani,North Indian,South Indian" ratings="4.3" deliveryTime="38 mins"/>
        <RestroCard img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4398bfb2-6948-484a-9613-2d7628a2457a_588619.JPG" resName="KFC" menu="Burger" ratings="4.8" deliveryTime="19 mins"/>
      */}
        {foodData.map((ele) => {
          return <RestroCard key={ele.idMeal} food={ele} />;
        })}
      </div>
    </div>
  );
};

const name = "hello";
export default name;
