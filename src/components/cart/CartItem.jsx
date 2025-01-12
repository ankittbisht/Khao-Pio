import React from 'react'
import foodpic from "../../assets/img/Group 16.png"
import deleteSvg from "../../assets/svg/deleteIcon.svg"
import { useDispatch, useSelector } from 'react-redux';
import { CDN_LINK } from "../../utils/constant";
import { removeItem } from '../../utils/cartSlice';

function CartItem({ items }) {
    const dispatch = useDispatch();

    const handleRemoveItem = (itemId) => {
        console.log(itemId)
        dispatch(removeItem(itemId));
    };
    return (
        <div className='flex flex-col gap-4 '>
            {items.map((item) => (
                <div className='bg-[#FAF3E1] rounded-[30px] py-4 md:py-7 px-7 md:inline-block relative '>
                    <div className="foodImg absolute top-1/2 -translate-y-1/2 -left-[48px] md:-left-[56pxc] lg:-left-[76px] size-24 md:size-28 lg:size-[152px] rounded-full bg-red-400 overflow-hidden shadow-2xl ">
                        <img
                            className="object-cover object-center size-24 md:size-28 lg:size-[152px]    "
                            src={CDN_LINK + item.card.info.imageId}
                            alt="food"
                        />
                    </div>
                    <main className="flex flex-col md:flex-row gap-5 md:gap-14 md:items-center  pl-10 lg:pl-16">
                        <div className="space-y-5 max-w-xs">
                            <div>
                                <h3 className="font-pop font-bold text-base md:text-lg lg:text-xl">{item.card.info.name}</h3>
                                <p className=" font-pop text-[10px] md:text-xs font-normal">{item.card.info.description}  </p>

                            </div>
                            <div className='flex justify-between items-center'>
                                <h2 className="font-pop font-bold text-lg md:text-xl ">
                                    ₹   {item.card.info.price
                                        ? item.card.info.price / 100
                                        : item.card.info.defaultPrice / 100}

                                </h2>
                                <button
                                    className='cursor-pointer'
                                    onClick={() => handleRemoveItem(item.card.info.id)}
                                >
                                    <img src={deleteSvg} alt="" />
                                </button>

                            </div>

                        </div>
                    </main>
                </div>))}

        </div>
    )
}

export default CartItem