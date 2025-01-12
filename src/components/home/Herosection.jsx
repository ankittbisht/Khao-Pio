import React, { useEffect, useState } from 'react'
import searchSvg from "../../assets/svg/search.svg"
import arrow from "../../assets/svg/arrow.svg"
import landingPageImg from "../../assets/img/Group 16.png"
import { SWIGGY_API } from "../../utils/constant";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeAll, setSearchItem } from '../../utils/searchSlice';
function Herosection() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        setListOfRestaurants(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

    };

    const handleSearch = () => {
        window.scrollTo({ top: 0, behavior: "instant" })
        dispatch(removeAll())
        const filteredList = listOfRestaurants.filter((res) =>
            res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
        );
        console.log(filteredList)
        dispatch(setSearchItem(filteredList))
        navigate("/search-result")

    }

    return (
        <section className='max-w-screen-2xl mx-auto px-4 sm:px-8  pt-24'>
            <div className='bg-[#FF6E1F] rounded-[30px]  p-5 md:px-14 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2'>
                <div className='space-y-8 md:space-y-16'>
                    <h1 className='font-protest text-white max-w-[480px] text-center md:text-start text-2xl  md:text-4xl lg:text-5xl pt-5 md:pt-0'>Explore mouthwatering
                        restaurant.</h1>
                    <div className="rounded-[20px] bg-white flex justify-between items-stretch max-w-[480px] overflow-hidden">
                        <div className='flex'>
                        <div className="py-4 px-2 md:px-4 flex items-center shrink-0">
                            <img src={searchSvg} className='size-5 md:size-auto' alt="" />
                        </div>
                        <input
                            type="text"
                            value={searchText}
                            onChange={(e) => {
                                // console.log(e.target.value)
                                setSearchText(e.target.value);
                            }}
                            placeholder="Search..."
                            className="flex-1  font-pop placeholder:text-base placeholder:md:text-sm placeholder:font-pop md:px-4 py-2 placeholder:text-black placeholder:text-opacity-40 text-opacity-40 text-black text-sm md:text-base  bg-transparent outline-none"
                        />
                        </div>
                       
                        <button
                            onClick={handleSearch}
                            className="arrowDiv pointer-events-auto shrink-0 bg-[#FAF3E1] flex justify-center items-center rounded-[20px] px-2 md:px-5">
                            <img src={arrow} className='size-6 md:size-auto' alt="" />
                        </button>
                    </div>
                </div>
                <div className='relative order-first md:order-last '>
                    <div className=' absolute -top-48  md:-top-64 right-0 '>
                        <img src={landingPageImg} className='pointer-events-none w-[220px] md:w-[350px] lg:w-[480px] xl:w-auto max-w-none' alt="" />
                    </div>
                </div>
            </div>
            {/* <div className='bg-[#FF6E1F] rounded-[30px] flex p-5 md:px-14 lg:px-20 py-16 md:justify-between'>
                <div className='space-y-8 md:space-y-16'>
                    <h1 className='font-protest text-white max-w-[480px] text-center md:text-start text-2xl  md:text-3xl lg:text-5xl'>Explore mouthwatering
                        restaurant.</h1>
                    <div className="rounded-[20px] bg-white flex justify-between items-stretch">
                        <div className="py-4 px-2 md:px-4 flex items-center shrink-0">
                            <img src={searchSvg} alt="" />
                        </div>
                        <input
                            type="text"
                            value={searchText}
                            onChange={(e) => {
                                // console.log(e.target.value)
                                setSearchText(e.target.value);
                            }}
                            placeholder="Search..."
                            className="md:flex-grow  font-pop placeholder:text-base placeholder:font-pop px-4 py-2 placeholder:text-black placeholder:text-opacity-40 text-opacity-40 text-black text-base  bg-transparent outline-none"
                        />
                        <button
                            onClick={handleSearch}
                            className="arrowDiv pointer-events-auto shrink-0 bg-[#FAF3E1] flex justify-center items-center rounded-[20px] px-2 md:px-5">
                            <img src={arrow} alt="" />
                        </button>
                    </div>
                </div>
                <div className='relative w-1/2  '>
                    <div className=' absolute -top-48  md:-top-64 right-0 '>
                        <img src={landingPageImg} className='pointer-events-none w-[220px] md:w-auto max-w-none' alt="" />
                    </div>
                </div>
            </div> */}
        </section>
    )
}

export default Herosection