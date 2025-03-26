import { IMAGE_BASE_URL } from "../utils/constants";

const ListItems = ({ data }) => {
  return (
    <div className="mt-4 space-y-4">
      {data.map((item) => {
        let { imageId, name, defaultPrice, description, id, price } =
          item.card.info;

        return (
          <div
            key={id}
            className="flex justify-between items-start bg-white p-4 rounded-lg shadow-md  border-gray-100"
          >
            {/* Content */}
            <div className="w-3/4">
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-gray-700">{description}</p>
              <p className="text-green-600 font-bold">
                ₹{(defaultPrice || price) / 100}
              </p>
            </div>

            {imageId && (
              <div className="w-24 h-24 relative">
                <img
                  src={IMAGE_BASE_URL + "" + imageId}
                  alt={name}
                  className="w-full h-full object-cover rounded-lg absolute flex justify-center items-center"
                />
                <div className="h-auto w-[70%] text-green-500 bg-white rounded-md  flex justify-center relative top-20 left-4 border border-gray-400">
                  <h1 className="font-sans font-bold">ADD</h1>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ListItems;
