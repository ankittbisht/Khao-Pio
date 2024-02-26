import { useDispatch } from "react-redux";
import { CDN_LINK } from "../utils/constant";
import { addToCart } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const hadnleAddItem = (item) => {
    dispatch(addToCart(item));
  };

  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200
          border-b-2 text-left flex justify-between relative"
        >
          <div>
            <button
              className="bg-black text-white  text-sm shadow-md p-2 rounded-lg absolute top-0 right-0"
              onClick={() => hadnleAddItem(item)}
            >
              Add +
            </button>
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <img
            className="w-24 m-2"
            src={CDN_LINK + item.card.info.imageId}
            alt="food"
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
