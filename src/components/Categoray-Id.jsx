import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Loader from "./Shimmer";
import { orderDetails } from "../utils/mockData";
import useFoodData from "../utils/useFoodData";
import { IMAGE_BASE_URL } from "../utils/constants.js";
import { RestaurantCategoray } from "./RestaurantCategoary.jsx";
const CategorayId = () => {
  const { id } = useParams();
  // const [foodData, setFoodData] = useState(null);
  // useEffect(() => {
  //   orderDetails().then(({ categories: food }) => {
  //     setFoodData(food.filter((ele) => ele.idCategory == id));
  //   });

  //   // setFoodData(food);
  // }, []);

  const foodData = useFoodData(id);
  if (foodData === null || foodData.length < 2) {
    return <Loader />;
  } else {
    return (
      <div className=" flex-col justify-center items-center h-screen w-screen">
        <div className="h-auto w-screen font-mono font-extrabold justify-center flex">
          {foodData[0].card.card.text}
        </div>
        <div>
          {foodData[1].map((ele, ind) => {
            return (
              <RestaurantCategoray
                key={ele.card.card.categoryId}
                data={ele.card.card}
              />
            );
          })}
        </div>
      </div>
    );
    // return foodData.map((ele) => {
    //   let { image, title, itemCards } = ele.card.card;
    //   return (
    //     <div
    //       className="flex justify-center items-center"
    //       key={ele.card.card.categoryId}
    //     >
    //       <div className=" w-96 h-screen justify-center flex-col items-center align-middle">
    //         <h1 className="h-10 font-extrabold">{title}</h1>
    //         <img className="h-40" src={IMAGE_BASE_URL + "" + image} />
    //         <p>{itemCards.length}</p>
    //       </div>
    //     </div>
    //   );
    // });
  }
};

export default CategorayId;
