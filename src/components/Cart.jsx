import { useSelector } from "react-redux";
import { IMAGE_BASE_URL } from "../utils/constants";
import ListItems from "./ListItems";
const Cart = () => {
  const selector = useSelector((store) => {
    return store.cart.items;
  });
  return selector.length == 0 ? (
    "cart is empty "
  ) : (
    // <div className="h-full w-screen bg-green-100 flex flex-wrap justify-center overflow-scroll scrollbar-hide">
    //   {selector.map((ele, ind) => {
    //     console.log(ele);
    //     const {
    //       category,
    //       id,
    //       description,
    //       imageId,
    //       name,
    //       price,
    //       defaultPrice,
    //       itemAttribute: { vegClassifier },
    //       ratings: {
    //         aggregatedRating: { rating },
    //       },
    //     } = ele.card.info;
    //     let tempStar = "⭐ ";
    //     let star = "";

    //     for (let i = 0; i < rating - 1; i++) {
    //       star += tempStar;
    //     }
    //     console.log(star);

    //     return (
    //       <div
    //         key={ind}
    //         className="h-2/6 w-9/12 bg-green-200 flex justify-center items-center  border-x-2 border-black"
    //       >
    //         <div
    //           className={`h-4/6 w-11/12 ${
    //             vegClassifier == "VEG" ? " bg-green-300" : "bg-red-300"
    //           }  flex justify-around items-center  text-start`}
    //         >
    //           <img
    //             src={`${IMAGE_BASE_URL}${imageId}`}
    //             alt="image of food"
    //             className="h-3/5 w-0.5/5 "
    //           />
    //           <div className="font-mono h-auto w-9/12 border-red-50 border ">
    //             <h1 className="font-extrabold">
    //               {name} {vegClassifier == "VEG" ? "🟢" : "🔴"}
    //             </h1>
    //             <p>{star}</p>
    //             <h3>{category}</h3>
    //             <p className="text-wrap text-sm">{description}</p>
    //             <p>{(defaultPrice || price) / 100}₹</p>
    //           </div>
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>
    <div className="h-screen w-full overflow-x-hidden">
      <h1>CART</h1>
      <div className="h-screen w-full flex justify-center items-center overflow-x-hidden">
        <ListItems data={selector} />
      </div>
      <h1>clear cart</h1>
    </div>
  );
};

export default Cart;
