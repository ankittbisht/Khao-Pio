import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Restaurantcard from '../../components/home/Restaurantcard';
import Skeletoncard from '../../components/home/Skeletoncard';
import { setSearchItem } from '../../utils/searchSlice';

function SearchPage() {
    const dispatch = useDispatch()
    const cartItems = useSelector((store) => store.search.items);

    console.log(cartItems)
    return (
        <div className='max-w-screen-2xl mx-auto px-4 sm:px-8 py-6 sm:py-12'>
            <div className=''>
                {(!Array.isArray(cartItems) || cartItems.length === 0) ? (
                    <div className=''>
                        <h1 className='font-protest  text-2xl  md:text-4xl lg:text-6xl text-[#FF6E1F] text-center'>  Nothing Matches Your Search</h1>
                     
                    </div>
                ) : (
                    <section className='space-y-28'>
                        <h1 className='font-protest  text-2xl  md:text-4xl lg:text-6xl text-[#FF6E1F] text-center'>  Here’s What We Found</h1>


                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-32'>
                            {
                                cartItems.map((restaurant) => (

                                    <Restaurantcard key={restaurant.info.id} resData={restaurant} />

                                ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    )
}

export default SearchPage