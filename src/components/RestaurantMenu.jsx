import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import RestaurantCategory from "./RestaurantCategory";

function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);
  const { resid } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resid);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8 px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">{name}</h1>
          <p className="text-lg font-semibold text-gray-700 mb-4">
            {cuisines.join(", ")} - {costForTwoMessage}
          </p>
          {categories.map((c, index) => (
            <div key={c?.card?.card.title} className="mb-6">
              <RestaurantCategory
                data={c.card.card}
                showItems={index === showIndex}
                setShowIndex={() => setShowIndex(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RestaurantMenu;
