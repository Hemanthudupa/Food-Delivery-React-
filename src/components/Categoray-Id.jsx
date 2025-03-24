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
        <div key={ele.idCategory} className="single">
          <h1>{ele.strCategory}</h1>
          <img src={ele.strCategoryThumb} />
          <p>{ele.strCategoryDescription}</p>
        </div>
      );
    });
  }
};

export default CategorayId;
