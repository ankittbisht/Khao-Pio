import React, { useState } from 'react'
import cartSvg from "../../assets/svg/cart.svg"
import logo from "../../assets/svg/logo.svg"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cartdropdown from '../../components/cart/Cartdropdown'

function Header() {
    const [dropdown, setDropdown] = useState(false)
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems)
    const toggleDropdown = () => {
        setDropdown(!dropdown)
    }

    return (
        <nav className=' max-w-screen-2xl mx-auto px-4 sm:px-8 py-5 sm:py-10' >
            <section className='rounded-[20px] bg-[#FF6E1F] flex justify-between px-8 py-5  items-center'>
                <div>
                    <Link to="/">
                        <h1 className="font-protest text-3xl md:text-4xl  font-bold text-center text-white">
                            KhaoPio
                        </h1>
                        {/* <img src={logo} alt="" /> */}

                    </Link>

                </div>
                <div className='hidden lg:flex gap-10 font-pop text-white font-semibold text-lg z-10'>
                    <Link to="/">
                        Home</Link>
                    <Link to="/about">
                        About</Link>
                    <Link to="/contact">
                        Contact</Link>

                </div>
                <div className='relative cursor-pointer'
                    onClick={toggleDropdown}
                >
                    <span className='absolute -top-2 -right-2 font-pop font-bold text-sm size-5 bg-red-600 rounded-full flex justify-center items-center text-white'>
                        {cartItems.length}
                    </span>
                    <img src={cartSvg} alt="" />
                </div>
                {dropdown && <Cartdropdown toggle={toggleDropdown} />}
            </section>
        </nav>
    )
}

export default Header