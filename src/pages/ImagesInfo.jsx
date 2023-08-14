import React from 'react'
import Images1 from "./../assets/images/portfolio/ms-1.jpg"
import Images2 from "./../assets/images/portfolio/ms-2.jpg"
import Images3 from "./../assets/images/portfolio/ms-3.jpg"
import Images4 from "./../assets/images/portfolio/ms-4.jpg"
import Images5 from "./../assets/images/portfolio/ms-5.jpg"

const ImagesInfo = () => {
    return <>
        <div className="">
            <div className="text-center py-20">
                <h1 className='lg:text-5xl text-4xl text-white font-bold'>Let’s Check my Projects</h1>
                <div className="mt-10 text-white text-xl text-center">
                    {/* <p className=''>Donec dignissim, metus sit amet suscipit mauris vul putate odio, quis cursus nunc urna Aliqum tell us. Quisque hendrerit ..</p> */}
                    <p>Donec dignissim, metus sit amet suscipit mauris vul</p>
                    <p>putate odio, quis cursus nunc urna Aliqum tell us.</p>
                    <p>Quisque hendrerit ..</p>
                </div>
            </div>
            <div className="grid lg:grid-cols-12 mx-8 gap-5 ">
                <div className="lg:col-span-4 ">
                    <img src={Images1} alt="" className='w-full rounded-3xl' />
                </div>
                <div className="lg:col-span-8">
                    <img src={Images2} alt="" className='w-full  rounded-3xl h-[333px]' />
                </div>
            </div>
            <div className="grid lg:grid-cols-12 mx-8 mt-5">
                <div className="lg:col-span-4">
                    <img src={Images3} alt="" className='lg:w-[85%] mt-3 w-full rounded-2xl' />
                </div>
                <div className="lg:col-span-4">
                    <img src={Images4} alt="" className='lg:w-[85%] mt-3 w-full rounded-2xl' />
                </div>
                <div className="lg:col-span-4">
                    <img src={Images5} alt="" className='lg:w-[85%] mt-3 w-full rounded-2xl' />
                </div>
            </div>
        </div>
        <div className=" text-white text-center">
            <button className='border mt-20 px-5 py-3 rounded-lg font-bold'>See More</button>
        </div>
    </>
}

export default ImagesInfo