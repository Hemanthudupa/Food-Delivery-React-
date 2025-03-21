import { listenerCount } from "process";
import { RestroCard } from "./RestroCard";
import { useState, useEffect } from "react";
import Loader from "./Shimmer";
export const Body = () => {
  const [foodData, setFoodData] = useState([]);
  const [search, setSearch] = useState("");
  const [foodDataFilter, setFoodDataFilter] = useState([]);

  useEffect(() => {
    orderDetails().then((data) => {
      setFoodData(data.categories);
      setFoodDataFilter(data.categories);
    });
    console.log(" useEffect is called ");
  }, []);

  function sortInAlpha() {
    let largestname = [...foodDataFilter].sort((a, b) => {
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
    // console.log(food, " is the food data in orderDetails api ");
    return food;
  }

  // if (foodData.length === 0) {
  //   return <Loader />;
  // }

  return foodData.length == 0 ? (
    <Loader />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            onClick={() => {
              let data = foodData.filter((ele) => {
                if (
                  ele.strCategory.toLowerCase().includes(search.toLowerCase())
                ) {
                  return ele;
                }
              });
              setFoodDataFilter(data);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let data = sortInAlpha();
            setFoodDataFilter(data);
          }}
        >
          SORT ALPHABETICALLY
        </button>
      </div>
      <div className="restro-container">
        {/* <RestroCard img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/x4uyxvihmg8qa3pddkgf" resName="Meghana Foods" menu="Biriyani,North Indian,South Indian" ratings="4.3" deliveryTime="38 mins"/>
        <RestroCard img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4398bfb2-6948-484a-9613-2d7628a2457a_588619.JPG" resName="KFC" menu="Burger" ratings="4.8" deliveryTime="19 mins"/>
       this is props declaraiton 
       */}
        {foodDataFilter.map((ele) => {
          // console.log(ele, " is the ele ");
          return <RestroCard key={ele.idCategory} food={ele} />;
        })}
      </div>
    </div>
  );
};

