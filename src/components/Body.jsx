import { listenerCount } from "process";
import { highRatedFood, RestroCard } from "./RestroCard";
import { useState, useEffect } from "react";
import Loader from "./Shimmer";
import { Link } from "react-router";
import { orderDetails } from "../utils/mockData";
export const Body = () => {
  const [foodData, setFoodData] = useState([]);
  const [search, setSearch] = useState("");
  const [foodDataFilter, setFoodDataFilter] = useState([]);

  useEffect(() => {
    orderDetails().then((data) => {
      setFoodData(data.categories);
      setFoodDataFilter(data.categories);
    });
  }, []);

  function sortInAlpha() {
    let largestname = [...foodDataFilter].sort((a, b) => {
      if (a.strCategory < b.strCategory) return -1;
      if (a.strCategory > b.strCategory) return 1;
    });

    return largestname;
  }

  // if (foodData.length === 0) {
  //   return <Loader />;
  // }
  //

  return foodData.length == 0 ? (
    <Loader />
  ) : (
    <div className="w-screen h-full overflow-hidden  bg-green-50 ">
      <div className="flex w-screen justify-between ">
        <div className="w-4/12 flex h-auto justify-evenly ">
          <input
            className="w-80 border border-solid  border-green-800 hover:scale-105 "
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="border-2 bg-green-800 text-white px-4 "
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
          className="w-64 bg-orange-300 text-white"
          onClick={() => {
            let data = sortInAlpha();
            setFoodDataFilter(data);
          }}
        >
          SORT ALPHABETICALLY
        </button>
      </div>
      <div className="flex flex-wrap h-screen overflow-scroll justify-center">
        {/* <RestroCard img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/x4uyxvihmg8qa3pddkgf" resName="Meghana Foods" menu="Biriyani,North Indian,South Indian" ratings="4.3" deliveryTime="38 mins"/>
        <RestroCard img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4398bfb2-6948-484a-9613-2d7628a2457a_588619.JPG" resName="KFC" menu="Burger" ratings="4.8" deliveryTime="19 mins"/>
       this is props declaraiton 
       */}
        {foodDataFilter.map((ele) => {
          // console.log(ele, " is the ele ");
          let Comp;
          if (Math.round(Math.random()) == 1) {
            Comp = highRatedFood(RestroCard);
          }
          return (
            <Link
              className="flex w-6/12 h-6/12 justify-center items-center border-x-2 border-b-slate-600 p-10  scrollbar-hide"
              key={ele.idCategory}
              to={`/category/${ele.idCategory}`}
            >
              {Comp ? <Comp food={ele}></Comp> : <RestroCard food={ele} />}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
