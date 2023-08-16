import React from 'react'
import Images1 from "./../assets/images/portfolio/ms-1.jpg"
import Images2 from "./../assets/images/portfolio/ms-2.jpg"
import Images3 from "./../assets/images/portfolio/ms-3.jpg"
import Images4 from "./../assets/images/portfolio/ms-4.jpg"
import Images5 from "./../assets/images/portfolio/ms-5.jpg"

const ImagesInfo = () => {
    return <>
        <div className="">
            <div className="text-center py-20 mx-20">
                <h1 className='lg:text-5xl text-4xl text-white font-bold'>Let’s Check my Projects</h1>
                <div className="mt-10 text-white text-xl flex justify-center">
                    <p className='lg:w-[37%]'>Donec dignissim, metus sit amet suscipit mauris vul putate odio, quis cursus nunc urna Aliqum tell us. Quisque hendrerit ..</p>
                    {/* <p>Donec dignissim, metus sit amet suscipit mauris vul</p>
                    <p>putate odio, quis cursus nunc urna Aliqum tell us.</p>
                    <p>Quisque hendrerit ..</p> */}
                </div>
            </div>
            <div className="grid grid-cols-12 mx-8">
                <div className="lg:col-span-4 md:col-span-6  relative group">
                    <img src={Images1} alt="" className='w-[95%] h-[80%] rounded-3xl absolute ' />
                    <div className=" absolute hidden group-hover:block rounded-3xl text-center opacity-75   bg-gray-600 text-white w-[95%] h-[80%]">
                        <h1 className='text-3xl font-bold mt-20'>User Data Collects</h1>
                        <h1 className='text-3xl font-bold'>for Movie App</h1>
                        <p className='font-bold'><span className='rounded-full text-yellow-500 text-5xl text-center '>.</span>UI UX Project</p>
                        <button className='rounded-xl border-2 border-yellow-400 text-yellow-400 px-2 py-2 mt-2'>View Project</button>
                    </div>
                </div>
                <div className="lg:col-span-8  col-span-12 relative group md:mx-10">
                    <img src={Images2} alt="" className='lg:w-full w-[100%] rounded-3xl lg:h-[80%] h-[80%]' />
                    <div className="absolute top-0 hidden group-hover:block rounded-3xl text-center opacity-75   bg-gray-600 text-white w-[100%] h-[80%]">
                        <h1 className='lg:text-5xl text-3xl font-bold lg:mt-10 md:mt-20 mt-4'>User Data Collects</h1>
                        <h1 className='lg:text-4xl text-3xl font-bold'>for Movie App</h1>
                        <p className='font-bold'><span className='rounded-full text-yellow-500 text-5xl text-center '>.</span>UI UX Project</p>
                        <button className='rounded-xl border-2 border-yellow-400 text-yellow-400 px-2 py-2 mt-2'>View Project</button>
                    </div>
                </div>
                <div className="lg:col-span-4 md:col-span-6 col-span-12 mx-2 relative group">
                    <img src={Images3} alt="" className='w-[100%] h-[90%] rounded-xl' />
                    <div className="absolute top-0 hidden group-hover:block rounded-xl text-center opacity-80   bg-gray-600 text-white w-[100%] h-[90%]">
                        <h1 className='lg:text-4xl text-3xl font-bold mt-20'>User Data Collects</h1>
                        <h1 className='lg:text-4xl text-3xl font-bold'>for Movie App</h1>
                        <p className='font-bold'><span className='rounded-full text-yellow-500 text-5xl  '>.</span>UI UX Project</p>
                        <button className='rounded-xl border-2 border-yellow-400 text-yellow-400 lg:px-5 px-2 py-2 lg:py-3 mt-5'>View Project</button>
                    </div>
                </div>
                <div className="lg:col-span-4 md:col-span-6 col-span-12 mx-2 relative group">
                    <img src={Images4} alt="" className='w-[100%] h-[90%] rounded-xl' />
                    <div className="absolute top-0 hidden group-hover:block rounded-xl text-center opacity-80  bg-gray-600 text-white w-[100%] h-[90%]">
                        <h1 className='lg:text-4xl text-3xl font-bold mt-20'>User Data Collects</h1>
                        <h1 className='lg:text-4xl text-3xl font-bold'>for Movie App</h1>
                        <p className='font-bold'><span className='rounded-full text-yellow-500 text-5xl text- '>.</span>UI UX Project</p>
                        <button className='rounded-xl border-2 border-yellow-400 text-yellow-400 lg:px-5 px-2 py-2 lg:py-3 mt-5'>View Project</button>
                    </div>
                </div>
                <div className="lg:col-span-4 md:col-span-6 col-span-12 mx-2 relative group">
                    <img src={Images5} alt="" className='w-[100%] h-[90%] rounded-xl' />
                    <div className="absolute top-0 hidden group-hover:block rounded-xl text-center opacity-80   bg-gray-600 text-white w-[100%] h-[90%]">
                        <h1 className='text-3xl font-bold mt-20'>User Data Collects</h1>
                        <h1 className='text-2xl font-bold'>for Movie App</h1>
                        <p className='font-bold'><span className='rounded-full text-yellow-500 text-5xl text-center '>.</span>UI UX Project</p>
                        <button className='rounded-xl border-2 border-yellow-400 text-yellow-400 lg:px-5 px-2 py-2 lg:py-3 mt-5'>View Project</button>
                    </div>
                </div>
            </div>
        </div>
        <div className=" text-white text-center">
            <button className='border mt-20 px-5 py-3 rounded-lg font-bold'>See More</button>
        </div>
    </>
}

export default ImagesInfo