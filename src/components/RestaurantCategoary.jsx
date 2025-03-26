export function RestaurantCategoray({
  data: { image, title, itemCards, categoryId },
}) {
  return (
    <div
      key={categoryId}
      className="  h-20 w-screen flex flex-wrap justify-center items-center m-4 "
    >
      <div className="h-20 w-6/12 bg-gray-200 flex justify-between items-center px-5 ">
        <div className="font-extrabold font-mono">
          {title}({itemCards.length})
        </div>
        <div>🔼</div>
      </div>
    </div>
  );
}
