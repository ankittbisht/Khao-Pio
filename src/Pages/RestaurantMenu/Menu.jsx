import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constant";
import RestaurantCategory from "../../components/Menu/RestaurantCategory";
import Skeletonitemlist from "../../components/Menu/Skeletonitemlist";


function Menu() {
    const [resInfo, setResInfo] = useState(null);
    const { resid } = useParams();
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resid);
        const json = await data.json();
        setResInfo(json.data);
    };

    if (resInfo === null) {
        return <>
            <Skeletonitemlist />
        </>
    }

    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards[2]?.card?.card?.info;

    const categories =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
                c.card?.["card"]?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    return (
        <section className='max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 space-y-10 '>
            <div className= 'space-y-3 md:space-y-5'>
                <h1 className='font-protest  text-2xl  md:text-4xl lg:text-6xl text-[#FF6E1F] text-center'>Something for Every Craving</h1>
                <h2 className='font-pop font-bold text-xl md:text-2xl lg:text-4xl text-black text-center'>{name}</h2>
            </div>
           <div className="space-y-3 md:space-y-5">
                {categories.map((c, index) => (
                    <div key={c?.card?.card.title} className="">
                        <RestaurantCategory
                            data={c.card.card}
                            isOpen={openIndex === index}
                            onToggle={() => toggleFAQ(index)}

                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Menu