import React from 'react'

function Skeletoncard() {
    const items = Array.from({ length: 10 }, (_, index) => index + 1);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-32'>
            {items.map((item) => (

                <div class="animate-pulse inline-block bg-[#FAF3E1] rounded-[30px] px-10 relative pb-10 pt-24 ">
                    <div class="size-[180px] rounded-full flex justify-center items-center absolute -top-[90px] -translate-x-1/2 left-1/2 overflow-hidden bg-black">
                        <div class="object-cover object-center w-full h-full bg-gray-200"></div>
                    </div>
                    <div class='space-y-8 flex flex-col justify-between h-full'>
                        <main class='space-y-3'>
                            <div class='py-1 px-2 rounded-md bg-[#FF6E1F] inline-flex items-center gap-1'>
                                <div class='font-pop font-semibold text-sm text-white w-4 h-4 bg-gray-200'></div>
                                <div class='w-4 h-4 bg-gray-200'></div>
                            </div>
                            <div class='flex justify-between items-start gap-10'>
                                <div class='font-pop font-bold text-2xl text-black leading-none w-20 h-4 bg-gray-200'></div>
                                <div class='flex items-center gap-1 '>
                                    <div class='w-4 h-4 bg-gray-200'></div>
                                    <div class='font-pop font-normal text-black text-nowrap w-10 h-4 bg-gray-200'></div>
                                </div>
                            </div>
                            <div>
                                <div class='font-pop text-black text-base font-normal w-20 h-4 bg-gray-200'></div>
                            </div>
                        </main>
                        <div class='flex justify-between items-center gap-10'>
                            <div>
                                <div class='font-pop text-black text-base font-normal w-16 h-4 bg-gray-200'></div>
                                <div class='font-pop text-black text-lg font-bold leading-none w-10 h-4 bg-gray-200'></div>
                            </div>
                            <div class='inline-flex font-pop font-bold text-white rounded-xl py-3 px-4 bg-[#FF6E1F] items-center gap-2'>
                                <div class='h-4 bg-gray-200 w-24'></div>
                                <div class='w-4 h-4 bg-gray-200'></div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Skeletoncard