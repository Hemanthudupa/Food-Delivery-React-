import { listenerCount } from "process";
import { highRatedFood, RestroCard } from "./RestroCard";
import { useState, useEffect } from "react";
import Loader from "./Shimmer";
import { Link } from "react-router";
import { orderDetails } from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
  const [foodData, setFoodData] = useState([]);
  const [search, setSearch] = useState("");
  const [foodDataFilter, setFoodDataFilter] = useState([]);

  useEffect(() => {
    orderDetails().then(({ data }) => {
      let { cards } = data;
      let [card] = cards.filter((ele) => {
        if (ele?.card?.card?.id == "top_brands_for_you") return ele;
      });

      let finalData = card.card.card.gridElements.infoWithStyle.restaurants;
      setFoodData(finalData);
      setFoodDataFilter(finalData);
    });
  }, []);
  const status = useOnlineStatus();

  function sortInAlpha() {
    let sortedData = [...foodDataFilter].sort((a, b) => {
      if (a.strCategory < b.strCategory) return -1;
      if (a.strCategory > b.strCategory) return 1;
    });
    return sortedData;
  }

  return foodData.length == 0 || !status ? (
    <Loader />
  ) : (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-200 via-green-100 to-green-300 p-10 font-sans flex flex-col items-center">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl p-6 mb-10 flex flex-col items-center space-y-6">
        <h1 className="text-3xl font-bold text-green-800">🍽️ Find Your Favorite Food</h1>
        <div className="flex w-full justify-between items-center space-x-4">
          <input
            className="w-full p-4 border border-green-700 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            type="text"
            placeholder="🔍 Search for food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="px-6 py-3 bg-green-700 text-white rounded-xl shadow-lg hover:bg-green-600 transition transform hover:scale-110"
            onClick={() => {
              let data = foodData.filter((ele) =>
                ele.strCategory.toLowerCase().includes(search.toLowerCase())
              );
              setFoodDataFilter(data);
            }}
          >
            🔎 Search
          </button>
        </div>
        <button
          className="px-6 py-3 bg-orange-500 text-white rounded-xl shadow-lg hover:bg-orange-400 transition transform hover:scale-110"
          onClick={() => {
            let data = sortInAlpha();
            setFoodDataFilter(data);
          }}
        >
          🔠 Sort Alphabetically
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 w-full max-w-6xl">
        {foodDataFilter.map((ele) => {
          let Comp;
          if (ele.info.avgRating > 4.5) {
            Comp = highRatedFood(RestroCard);
          }
          return (
            <Link
              className="flex flex-col items-center justify-center border border-gray-200 p-6 rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition bg-white transform hover:-translate-y-2 duration-300"
              key={ele.info.id}
              to={`/category/${ele.info.id}`}
            >
              {Comp ? <Comp food={ele} /> : <RestroCard food={ele} />}
              <p className="mt-4 text-lg font-semibold text-gray-700">{ele.info.name}</p>
              <p className="text-sm text-gray-500">⭐ {ele.info.avgRating} | ⏳ {ele.info.deliveryTime} mins</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
