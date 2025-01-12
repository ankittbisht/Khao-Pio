import React from 'react'
import pizza from "../../assets/img/image.png"
import timeSvg from "../../assets/svg/time.svg"
import arrow from "../../assets/svg/whiteArrow.svg"
import { CDN_LINK } from "../../utils/constant";
import { Link } from 'react-router-dom';
function Restaurantcard({ resData }) {
   
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla, id } = resData?.info || {};
    const cost = parseInt(costForTwo.match(/\d+/)[0]);

    return (
        <div className='bg-[#FAF3E1]  inline-block rounded-[30px] px-6 md:px-10 relative pb-10 pt-24 hover:shadow-xl duration-300 transition-shadow transform cursor-pointer'>
            <div className='size-[180px]   rounded-full flex justify-center items-center absolute -top-[90px] bg-black -translate-x-1/2 left-1/2 overflow-hidden'>
                <img src={CDN_LINK + cloudinaryImageId}
                    alt={name} className=' object-cover object-center size-[180px]' />
            </div>
            <div className='space-y-8 flex flex-col justify-between h-full'>
                <main className='space-y-3'>
                    <div className='py-1 px-2 rounded-md bg-[#FF6E1F]  inline-flex gap-1 items-center '>
                        <span className='font-pop font-semibold text-xs md:text-sm  text-white'>{avgRating}</span>
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.34949 0L9.60717 3.61743L13.8495 4.58359L11.0025 7.78545L11.3667 12L7.34949 10.3614L3.33227 12L3.69649 7.78545L0.849487 4.58359L5.09181 3.61743L7.34949 0Z" fill="white" />
                        </svg>
                    </div>
                    <div className='flex justify-between items-start gap-5  md:gap-10'>
                        <h2 className='font-pop font-bold text-xl  md:text-[22px] lg:text-2xl text-black leading-none'>{name}</h2>
                        <div className='flex items-center gap-1 '>
                            <img src={timeSvg} alt="" />
                            <h5 className='font-pop font-normal text-black text-nowrap text-sm md:text-base'>{sla.slaString}</h5>
                        </div>
                    </div>
                    <div>
                        <p className='font-pop text-black text-sm md:text-base font-normal '>{cuisines.join(", ")}</p>
                    </div>
                </main>

                <div className='flex justify-between items-center gap-10'>
                    <div>
                        <h3 className='font-pop text-black text-sm md:text-base font-normal leading-none'>Cost for two</h3>
                        <h3 className='font-pop text-black text-lg font-bold leading-none' >₹{cost}</h3>
                    </div>
                    <Link to={"/restaurants/" + id}
                        onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                        className='inline-flex font-pop font-bold text-white rounded-xl py-3 px-4 bg-[#FF6E1F]
                                gap-1 md:gap-2 items-center text-sm md:text-base'>
                        Explore Menu
                        <img src={arrow} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Restaurantcard