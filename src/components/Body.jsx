import { RestroCard } from "./RestroCard";
import { useState, useEffect } from "react";
export const Body = () => {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    orderDetails().then((data) => {
      setFoodData(data.categories);
    });
  }, []);

  function sortInAlpha() {
    let largestname = [...foodData].sort((a, b) => {
      if (a.strCategory < b.strCategory) return -1;
      if (a.strCategory > b.strCategory) return 1;
    });

    return largestname;
  }

  async function orderDetails() {
    let food = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    food = await food.json();

    return food;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let data = sortInAlpha();
            setFoodData(data);
          }}
        >
          SORT ALPHABETICALLY
        </button>
      </div>
      <div className="restro-container">
        {/* <RestroCard img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/x4uyxvihmg8qa3pddkgf" resName="Meghana Foods" menu="Biriyani,North Indian,South Indian" ratings="4.3" deliveryTime="38 mins"/>
        <RestroCard img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4398bfb2-6948-484a-9613-2d7628a2457a_588619.JPG" resName="KFC" menu="Burger" ratings="4.8" deliveryTime="19 mins"/>
      */}
        {foodData.map((ele) => {
          return <RestroCard key={ele.idCategory} food={ele} />;
        })}
      </div>
    </div>
  );
};

const name = "hello";
export default name;
