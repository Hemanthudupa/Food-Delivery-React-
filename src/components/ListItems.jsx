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
            className="flex justify-between items-start bg-white p-4 rounded-lg shadow-md border border-gray-200"
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
              <div className="w-24 h-24">
                <img
                  src={IMAGE_BASE_URL+""+imageId}
                  alt={name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ListItems;
