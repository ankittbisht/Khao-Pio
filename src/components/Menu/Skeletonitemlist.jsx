import React from 'react'

function Skeletonitemlist() {
    const item = Array.from({ length: 7 }, (_, idx) => idx + 1);
    return (
        <>
            <section class='max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 space-y-10 animate-pulse'>
                <div class='space-y-5'>
                    <div class='h-6 bg-gray-200 rounded w-1/2 mx-auto'></div>
                    <div class='h-4 bg-gray-200 rounded w-1/3 mx-auto'></div>
                </div>

                <div className="space-y-3">
                {item.map(() =>
                    <div class="w-full max-w-3xl mx-auto px-8 py-4 bg-[#FF6E1F] rounded-[30px]">
                        <div class="flex justify-between items-center text-lg">
                            <div class="text-white">
                                <div class="h-6 bg-gray-200 rounded mb-1"></div>
                                <div class="h-6 bg-gray-200 rounded"></div>
                            </div>
                            <div class="transform rotate-0 duration-300 transition-all">
                                <div class="h-6 w-6 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            </section>
            {/* <div class="space-y-5 animate-pulse">
                <div class="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
                <div class="h-5 bg-gray-200 rounded w-1/2 mx-auto"></div>
            </div> */}

        </>
    )
}

export default Skeletonitemlist