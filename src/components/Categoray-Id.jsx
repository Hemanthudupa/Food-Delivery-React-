import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Loader from "./Shimmer";
import { orderDetails } from "../utils/mockData";
import useFoodData from "../utils/useFoodData";
const CategorayId = () => {
  const { id } = useParams();
  // const [foodData, setFoodData] = useState(null);
  // useEffect(() => {
  //   orderDetails().then(({ categories: food }) => {
  //     setFoodData(food.filter((ele) => ele.idCategory == id));
  //   });

  //   // setFoodData(food);
  // }, []);
  console.log(" categroay id comp is renderd");

  const foodData = useFoodData(id);

  if (foodData === null) {
    return <Loader />;
  } else {
    return foodData.map((ele) => {
      return (
        <div className="flex justify-center items-center" key={ele.idCategory}>
          <div className=" w-96 h-screen justify-center flex-col items-center align-middle">
            <h1 className="h-10 font-extrabold">{ele.strCategory}</h1>
            <img className="h-40" src={ele.strCategoryThumb} />
            <p>{ele.strCategoryDescription}</p>
          </div>
        </div>
      );
    });
  }
};

export default CategorayId;
