import React, { useEffect, useRef, useState } from "react";
import ItemList from "./ItemList";
import dropdownSvg from "../../assets/svg/dropdown.svg"

function RestaurantCategory({ data, isOpen, onToggle }) {
  const answerRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);


  useEffect(() => {
    if (isOpen && answerRef.current) {
      setMaxHeight(answerRef.current.scrollHeight);
    } else {
      setMaxHeight(0);
    }
  }, [isOpen]);

  return (
    <section className="space-y-2 md:space-y-4">
      <div className="w-full max-w-3xl mx-auto  px-4 md:px-8 py-3 md:py-4 bg-[#FF6E1F]  rounded-[30px]">
        <div
          className="flex justify-between items-center cursor-pointer text-lg"
          onClick={onToggle}
        >
          <div className="text-white ">
            <h3 className="font-pop font-medium text-lg md:text-xl lg:text-2xl">{data.title}</h3>
            <h5 className="font-pop font-medium text-xs md:text-sm lg:text-base"> ({data.itemCards.length}) items</h5>
          </div>

          <span
            className={`${isOpen ? "transform rotate-180" : "transform rotate-0"}  duration-300 transition-all`}
          >
            <img src={dropdownSvg} alt="" />
          </span>
        </div>
      </div>
      {isOpen && (
        <ItemList ref={answerRef}
          style={{
            maxHeight: isOpen ? `${maxHeight}px` : "0px",
          }}
          className="overflow-hidden transform transition-all duration-300" items={data.itemCards} />
      )}
    </section>
  );
}

export default RestaurantCategory;
