import { useEffect, useState } from "react";
import { orderDetails } from "./mockData";

const useFoodData = (id) => {
  const [foodData, setFoodData] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.97530&lng=77.59100&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    ).then((data) => {
      data.json().then((data) => {
        const filteredData = data.data.cards
          .at(-1)
          .groupedCard.cardGroupMap.REGULAR.cards.filter((ele) => {
            if (
              ele?.card?.card["@type"] ==
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            )
              return ele;
          });
        let fullData = [data.data.cards[0]];
        fullData.push(filteredData);
        setFoodData([...fullData]);
      });
    });
  }, []);

  return foodData;
};

export default useFoodData;
