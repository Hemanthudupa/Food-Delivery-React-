import { useState } from "react";
import ListItems from "../components/ListItems";
// export function RestaurantCategoray({
//   data: { image, title, itemCards, categoryId },
// }) {
//   return (
//     <div
//       key={categoryId}
//       className="  h-screen w-screen flex  justify-center align-top p-2 "
//     >
//       <div className="h-screen w-6/12 bg-gray-200  px-5  ">
//         <div className="font-extrabold font-mono flex justify-between items-center">
//           {title}({itemCards.length})<span>🔼</span>
//         </div>
//         <ListIetms data={itemCards}></ListIetms>
//       </div>
//     </div>
//   );
// }

export function RestaurantCategoray({
  data: { image, title, itemCards, categoryId },
  setIndex: setOpened,
  showData,
}) {
  let [res, setRes] = useState(false);
  function handleClick() {
    setOpened();
  }
  return (
    <div key={categoryId} className="flex justify-center p-4">
      <div
        onClick={handleClick}
        className="w-full max-w-2xl bg-gray-100 rounded-lg shadow-lg p-5"
      >
        {/* Category Header */}
        <div className="flex justify-between items-center text-xl font-bold font-mono border-b pb-3">
          <h2>
            {title} ({itemCards.length})
          </h2>
          {console.log(showData, " is the function ")}
          <span className="cursor-pointer text-lg">
            {showData ? "🔽" : "🔼"}
          </span>
        </div>

        {/* List Items */}
        {showData && <ListItems data={itemCards} />}
      </div>
    </div>
  );
}
