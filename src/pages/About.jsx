import React from 'react'
import image1 from "../assets/images/hero/hero-three/model.png"

const About = () => {
    return <>
        <div className="">
            <div className="grid grid-cols-12 bg-slate-900">
                <div className="col-span-12 lg:col-span-6">
                    <div className="mx-16 mt-10">
                        <p className=' text-4xl lg:text-6xl text-white font-bold mb-7'>Hey, I am</p>
                        <p className=' text-4xl lg:text-6xl text-white font-bold mb-7'>Richard Lord</p>
                        <p className=' text-4xl lg:text-6xl text-white font-bold mb-7'>Web Developer</p>
                        <div className="mt-12">
                            <p className='text-2xl text-gray-300 font-bold mb-7'>Agency work with top rated talented people provide qulaity services.</p>
                        </div>
                        <div className="flex gap-7">
                            <div className="text-center lg:p-4 lg:h-14 lg:w-40 py-2 px-4 h-14 rounded-lg bg-yellow-500">
                                <button className='text-black font-bold'>Hire Me <i class="bi bi-arrow-right absolute text-1xl"></i></button>
                            </div>
                            <div className="">
                                <i class="bi bi-play-circle text-5xl animate-pulse text-yellow-500"></i>
                            </div>
                            <div className="">
                                <h1 className='text-white text-1xl'>WATCH</h1>
                                <h1 className='text-gray-400'>Intro Video</h1>
                            </div>
                        </div>
                        <div className="mt-10 text-gray-400">
                            <p>Over <b className='text-yellow-300 text-1xl'>50,000+ client</b> all over the world.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 my-5 mx-16">
                    <img src={image1} alt="" />
                </div>
            </div>

        </div>
    </>
}

export default About