import { useEffect, useState } from "react";
import { orderDetails } from "./mockData";

const useFoodData = (id) => {
  console.log(" custom hook is renderd");

  const [foodData, setFoodData] = useState([]);
  useEffect(() => {
    orderDetails().then((data) => {
      setFoodData(data.categories.filter((ele) => ele.idCategory == id));
    });
  }, []);

  return foodData;
};

export default useFoodData;
