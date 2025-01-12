import { useDispatch } from "react-redux";
import { CDN_LINK } from "../../utils/constant";
import { addToCart } from "../../utils/cartSlice";
import cart from "../../assets/svg/addCart.svg"
import doneSvg from "../../assets/svg/done.svg"
import { useState } from "react";

const ItemList = ({ items }) => {

  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();

  const hadnleAddItem = (item) => {
    dispatch(addToCart(item));
    setShowPopup(true)
    setTimeout(() => setShowPopup(false), 3000)
  };

  return (
    <div className="space-y-3">
      {showPopup && <div>
        <div className="fixed bottom-5 md:bottom-10 left-1/2 -translate-x-1/2 bg-green-500 text-white px-5 py-3 rounded-[20px] shadow-lg transition-all duration-300 flex justify-center gap-3 md:gap-5  mx-auto items-center w-[80%] sm:w-auto">
          <div className="shrink-0">
            <img src={doneSvg} alt="" />
          </div>
          <h2 className="font-pop font-bold  text-base md:text-lg lg:text-2xl  ">
            Item added to cart!
          </h2>

        </div>
      </div>}
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="bg-[#FAF3E1] w-full max-w-3xl mx-auto px-4 md:px-8 py-5 rounded-[30px] flex justify-between  md:items-center "
        >
          <main className="flex flex-col md:flex-row gap-5 md:gap-14 md:items-center">
            <div className="foodImg shrink-0">
              <img
                className="size-24 md:size-28 lg:size-36 rounded-full shadow-2xl"
                src={CDN_LINK + item.card.info.imageId}
                alt="food"
              />
            </div>
            <div className="space-y-4 max-w-[410px]">
              <div>
                <h3 className="font-pop font-bold text-lg md:text-xl lg:text-2xl">{item.card.info.name}</h3>
                <span className="font-pop font-bold text-lg md:text-xl">
                  ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className=" font-pop text-xs md:text-sm">{item.card.info.description}</p>
            </div>
          </main>

          <button
            className="shrink-0 "
            onClick={() => hadnleAddItem(item)}
          >
            <img src={cart} alt="" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
