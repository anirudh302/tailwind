import React from 'react'
// import Images1 from "https://quomodothemes.website/fallow/assets/images/about/male.png"
import Images1 from "./../assets/images/about/male.png"

const Resume = () => {
    return <>
        <div className="">
            <div className="grid grid-cols-12 border-2 mt-20">
                <div className="col-span-4 mx-16">
                    <div className="py-10 text-white">
                        <h1 className='font-bold text-3xl'>Resume</h1>
                    </div>
                    <div className="flex gap-7 mt-12">
                        <div className="font-bold text-2xl text-white">
                            <h1>Richard Lord</h1>
                            <h1>Web developer</h1>
                        </div>
                        <div className="flex gap-1">
                            <div className=" font-bold text-7xl h-38 text-yellow-400">
                                <h1 className=''>5</h1>
                            </div>
                            <div className="text-white text-1xl mt-2 text-1xl">
                                <h1>Years</h1>
                                <h1>Experience</h1>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 mt-5"></div>
                    <div className="mt-4 text-white">
                        <p>Hi there! My name is Richard lord, and I'm a web developer based in Dhaka, Bangladesh. I have a passion .
                            I've been working in the web development field for 5 years, and during that time, I've gained experience</p>
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="py-28">
                        <img src={Images1} alt="" />
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="py-28 mt-14 text-white flex gap-10">
                        <div className="">
                            <h1 className='font-bold text-2xl'>Sr. Web Developer</h1>
                            <h1 className='mt-2'><i class="bi bi-microsoft text-red-400"></i> Microsoft</h1>
                            <div className="border-2 mt-"></div>
                        </div>
                        <div className="mt-5 bg-yellow-400 text-white py-2 px-2 rounded-lg">
                            <button className=''>Current</button>
                        </div>
                        <div className=""></div>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
}

export default Resume

