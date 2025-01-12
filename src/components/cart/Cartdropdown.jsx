import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import closeSvg from "../../assets/svg/close.svg"
import CartItem from './CartItem';
import { clearCart } from '../../utils/cartSlice';

function Cartdropdown({ toggle }) {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };


    return (
        <section className=' max-w-screen-2xl mx-auto  fixed z-[99] w-full inset-0 backdrop-blur-sm py-5 sm:py-10 px-4 sm:px-8 flex justify-end'>

            <div className='rounded-[30px]   absolute bg-white  ml-6 p-5 md:p-10 space-y-12 shadow-lg max-h-[80vh] overflow-y-auto'>
                <div className="flex justify-between gap-10 md:gap-28 items-center">
                    <h3 className="font-pop font-bold text-lg md:text-xl lg:text-2xl whitespace-nowrap ">Items In your Cart</h3>
                    <div onClick={toggle} className='cursor-pointer shrink-0'>
                        <img src={closeSvg} alt="" />
                    </div>
                </div>

                {cartItems.length === 0 ? (
                    <p className="text-sm md:text-lg text-center font-pop font-normal">
                        Your cart is empty.
                    </p>
                ) :
                    <>
                        <div className='pl-12 md:pl-20' >
                            <CartItem items={cartItems} />
                        </div>
                        <button
                            className="block w-full py-3 px-6 rounded-[10px] bg-[#FF6E1F] text-white font-medium font-pop"
                            onClick={handleClearCart}
                        >
                            Clear Cart
                        </button>
                    </>

                }

            </div>
        </section>

    )
}

export default Cartdropdown