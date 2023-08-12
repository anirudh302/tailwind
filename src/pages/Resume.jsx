import React from 'react'
// import Images1 from "https://quomodothemes.website/fallow/assets/images/about/male.png"
import Images1 from "./../assets/images/about/male.png"

const Resume = () => {
    return <>
        <div className="">
            <div className="grid grid-cols-12 border mt-20 mx-8 p-10">
                <div className="col-span-12 lg:col-span-4 ">
                    <div className=" text-white">
                        <h1 className='font-bold text-3xl'>Resume</h1>
                    </div>
                    <div className="flex gap-7 mt-20">
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
                    <div className="border mt-5"></div>
                    <div className="mt-4 text-white text-lg">
                        <p>Hi there! My name is Richard lord, and I'm a web developer based in Dhaka, Bangladesh. I have a passion .</p>
                        <p>I've been working in the web development field for 5 years, and during that time, I've gained experience</p>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-4 ">
                    <div className="  lg:pt-20 flex justify-center ">
                        <img src={Images1} alt="" />
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-4   lg:py-20">
                    <div className=" mt-14 text-white flex ">
                        <div className="">
                            <h1 className='font-bold text-2xl'>Sr. Web Developer</h1>
                            <h1 className='mt-2'><i class="bi bi-microsoft text-red-400"></i> Microsoft</h1>
                            <div className="border"></div>
                        </div>
                        <div className=" ms-auto">
                            <button className='bg-yellow-400 py-2 mt-5 px-5  text-white rounded-lg '>Current</button>
                        </div>
                    </div>
                    <div className=" mt-14 text-white flex gap-10">
                        <div className="">
                            <h1 className='font-bold text-2xl'>Lead Web Developer</h1>
                            <h1 className='mt-2'>Uber</h1>
                            <div className="border w-full"></div>
                        </div>
                        <div className=" ms-auto">
                            <button className='border-yellow-400 border text-yellow-400 py-2 px-5 rounded-lg '>2018-2020</button>
                        </div>
                    </div>
                    <div className=" mt-14 text-white flex gap-10">
                        <div className="">
                            <h1 className='font-bold text-2xl'>Web Developer</h1>
                            <h1 className='mt-2'>Linked</h1>
                            <div className="border"></div>
                        </div>
                        <div className=" ms-auto">
                            <button className='border-yellow-400 border text-yellow-400 py-2 px-5 rounded-lg '>2018-2020</button>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-6 col-span-12" >
                    <div className="mt-10">
                        <h1 className='text-3xl font-bold  text-white'>Skills</h1>
                        <div className="border "></div>
                        <div className="flex gap-5 mt-4 font-bold">
                            <h1 className='border hover:bg-yellow-400 text-white  transition duration-300  py-2 px-3 rounded-lg'>Html</h1>
                            <h1 className='border hover:bg-yellow-400 text-white  transition duration-300  py-2 px-3 rounded-lg'>CSS</h1>
                            <h1 className='border hover:bg-yellow-400 text-white  transition duration-300  py-2 px-3 rounded-lg'>Front-end</h1>
                            <h1 className='border hover:bg-yellow-400 text-white  transition duration-300  py-2 px-3 rounded-lg'>PHP</h1>
                        </div>
                        <div className="flex mt-4 gap-5 font-bold">
                            <h1 className='border hover:bg-yellow-400 text-white  transition duration-300  py-2 px-3 rounded-lg'>Back-end</h1>
                            <h1 className='border hover:bg-yellow-400 text-white  transition duration-300  py-2 px-3 rounded-lg'>Java Scropt</h1>
                            <h1 className='border hover:bg-yellow-400 text-white  transition duration-300  py-2 px-3 rounded-lg'>Laravel</h1>
                            <h1 className='border hover:bg-yellow-400 text-white  transition duration-300  py-2 px-3 rounded-lg'>C++</h1>
                        </div>
                        <div className="flex mt-3 font-bold">
                            <h1 className='border hover:bg-yellow-400 text-white  transition duration-300  py-2 px-3 rounded-lg'>Figma</h1>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-6 col-span-12" >
                    <div className="mt-10">
                        <h1 className='text-3xl font-bold text-white'>Tools I use every day</h1>
                        <div className="border "></div>
                        <div className=""></div>
                    </div>
                </div>
            </div>

        </div>
    </>
}

export default Resume

