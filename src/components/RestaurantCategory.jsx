import React, { useState } from "react";
import ItemList from "./ItemList";

function RestaurantCategory({ data, showItems, setShowIndex }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
    setShowIndex(); // Assuming this function is responsible for some other functionality
  };

  return (
    <div className="w-full max-w-xl mx-auto my-4 p-4 bg-white shadow-lg rounded-lg">
      <div
        className="flex justify-between items-center cursor-pointer text-lg"
        onClick={toggleExpansion}
      >
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span
          className={isExpanded ? "transform rotate-180" : "transform rotate-0"}
        >
          ⬇️
        </span>
      </div>
      {isExpanded && (
        <div className="mt-2">
          <ItemList items={data.itemCards} />
        </div>
      )}
    </div>
  );
}

export default RestaurantCategory;
