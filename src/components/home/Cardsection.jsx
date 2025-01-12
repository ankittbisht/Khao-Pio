import React, { useEffect, useState } from 'react'
import { SWIGGY_API } from "../../utils/constant";
import Restaurantcard from './Restaurantcard'
import { Link } from 'react-router-dom';
import Skeletoncard from './Skeletoncard';

function Cardsection() {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    // * Whenever a state variable updates or changes, react triggers a reconciliation cycle(re-renders the component)
    // console.log(listOfRestaurants);

    useEffect(() => {
        fetchData();

    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API);

        const json = await data.json();

        setListOfRestaurants(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurant(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    };

    const specialities = [
        {
            label: "All restaurant", onClick: () => {
                // Show all restaurants
                setFilteredRestaurant(listOfRestaurants);
            },
        },
        {
            label: "Top Rated",
            onClick: () => {
                const filteredList = listOfRestaurants.filter(
                    (res) => res?.info?.avgRating > 4.2
                );
                setFilteredRestaurant(filteredList);
            },
        },
        {
            label: "Pocket-friendly", onClick: () => {
                // Filter restaurants with average cost below a threshold
                const filteredList = listOfRestaurants.filter((res) => {
                    const costString = res?.info?.costForTwo; // Example: "₹300 for two"
                    // Extract the numeric value from the string
                    const cost = parseInt(costString.match(/\d+/)[0]);

                    // Compare extracted cost to the threshold
                    return cost <= 300; // Example threshold
                });

                setFilteredRestaurant(filteredList);
            }
        },
        {
            label: "Fast Delivery", onClick: () => {
                // Filter restaurants with delivery time <= 30 minutes
                const filteredList = listOfRestaurants.filter((res) => {
                    // Extract delivery time from string like "30 mins"
                    const deliveryTime = parseInt(res?.info?.sla?.slaString.match(/\d+/)?.[0]);

                    return deliveryTime <= 30; // Example threshold
                });
                setFilteredRestaurant(filteredList);
            },
        },
    ];

    return (
        <section className='max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-10 space-y-16 '>
            <div className='flex overflow-x-scroll md:overflow-hidden flex-row gap-5 md:gap-10'>
                {specialities.map((item, idx) => (
                    <button onClick={item.onClick}
                        className='rounded-xl font-pop text-nowrap text-sm md:text-base lg:text-lg text-white font-medium py-3 px-6 bg-[#FF6E1F]'>
                        {item.label}
                    </button>
                ))}
            </div>
            <div className='pt-16 '>
                {(!Array.isArray(listOfRestaurants) || listOfRestaurants.length === 0) ? (
                    <Skeletoncard />
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-32'>
                        {
                            filteredRestaurant?.map((restaurant) => (
                                <Restaurantcard key={restaurant.info.id} resData={restaurant} />

                            ))}
                    </div>
                )}
            </div>
        </section>

    )
}

export default Cardsection