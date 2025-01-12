import React from 'react'

function Footer() {
    return (
        <footer className='max-w-screen-2xl mx-auto px-4 sm:px-8 py-5 sm:py-10'>
            <section className='rounded-[20px] bg-[#FF6E1F] flex flex-col md:flex-row justify-between px-8 py-8  items-center gap-3 md:gap-0' >
                <div>
                    <h2 className='font-pop font-normal text-sm text-center md:text-start md:text-base text-white'>2025 KhaoPio . All Rights Reserved.</h2>
                </div>
                <ul className='flex flex-col text-center md:text-start md:flex-row gap-3 md:gap-6 text-white font-pop font-normal text-sm lg:text-base'>
                    <li>Privacy Policies</li>
                    <li>Cookies</li>
                    <li>Terms of services</li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer