import { IMAGE_BASE_URL } from "../utils/constants";

export const RestroCard = ({ food: { info } }) => {
  let { name, avgRating, cloudinaryImageId, cuisines } = info;
  return (
    <div className=" justify-between  text-wrap  border-2 rounded-xl  w-96 overflow-hidden hover:bg-gray-300 hover:scale-105 ">
      <img className="w-full h-52" src={IMAGE_BASE_URL + cloudinaryImageId} />
      <div className="flex-col justify-center items-center overflow-y-auto scrollbar-hide h-40 w-96 ">
        <h3 className="font-serif font-extrabold  justify-center flex">
          {name}
        </h3>
        <p className="font-mono font-extralight text-zinc-700 text-sm ">
          {cuisines}
        </p>

        <div className="w-full flex justify-center ">
          <h5 className="border-x-2 border-red-400 px-10">{avgRating}</h5>
        </div>
      </div>
    </div>
  );
};

export const highRatedFood = (Card) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 bg-yellow-400 px-2 py-1 text-sm font-bold rounded">
          Promoted
        </label>
        <Card {...props} />
      </div>
    );
  };
};
