export const RestroCard = ({
  food: { strCategoryThumb, strCategory, strCategoryDescription },
}) => {
  return (
    <div className=" justify-between  text-wrap  border-2 rounded-xl  w-96 overflow-hidden hover:bg-gray-300 hover:scale-105 ">
      <img className="w-full h-52" src={strCategoryThumb} />
      <div className="flex-col justify-center items-center overflow-y-auto h-40 w-96 ">
        <h3 className="font-serif font-extrabold  justify-center flex">
          {strCategory}
        </h3>
        <p className="font-mono font-extralight text-zinc-700 text-sm ">
          {strCategoryDescription}
        </p>

        <div className="w-full flex justify-center ">
          <h5 className="border-x-2 border-red-400 px-10">
            {(4 + Math.random()).toFixed(1)}
          </h5>
        </div>
      </div>
    </div>
  );
};
