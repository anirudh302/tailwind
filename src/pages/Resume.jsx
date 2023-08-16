import React from 'react'
// import Images1 from "https://quomodothemes.website/fallow/assets/images/about/male.png"
import Images1 from "./../assets/images/about/male.png"
import Images2 from "./../assets/images/clients/f-c-2.png"
import Images3 from "./../assets/images/clients/f-c-3.png"
import Images4 from "./../assets/images/clients/f-c-4.png"
import Images5 from "./../assets/images/clients/f-c-5.png"
import Images6 from "./../assets/images/clients/f-c-1.png"

const Resume = () => {
    return <>
        <div className="">
            <div className="grid grid-cols-12 border mt-20 mx-8 p-8">
                <div className="col-span-12 lg:col-span-4">
                    <div className="text-white">
                        <h1 className='font-bold text-3xl'>Resume</h1>
                    </div>
                    <div className="flex lg:gap-7 gap-3 mt-20">
                        <div className=" text-white">
                            <h1 className='font-bold lg:text-2xl'>Richard Lord</h1>
                            <h1 className='font-bold lg:text-2xl'>Web developer</h1>
                        </div>
                        <div className="flex gap-1">
                            <div className="">
                                <h1 className='font-bold lg:text-7xl text-4xl text-yellow-400'>5</h1>
                            </div>
                            <div className="text-white">
                                <h1 className='lg:text-1xl mt-2'>Years</h1>
                                <h1 className='lg:text-1xl '>Experience</h1>
                            </div>
                        </div>
                    </div>
                    <div className="border mt-5"></div>
                    <div className="mt-4 text-white text-lg">
                        <p>Hi there! My name is Richard lord, and I'm a web developer based in Dhaka, Bangladesh. I have a passion .</p>
                        <p>I've been working in the web development field for 5 years, and during that time, I've gained experience</p>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-4">
                    <div className="lg:pt-20 flex justify-center">
                        <img src={Images1} alt="" />
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-4 lg:py-20">
                    <div className="mt-14 text-white flex ">
                        <div className="">
                            <h1 className='font-bold lg:text-2xl md:text-2xl sm:text-2xl text-xl'>Sr. Web Developer</h1>
                            <h1 className='mt-2'><i class="bi bi-microsoft text-red-400"></i> Microsoft</h1>
                        </div>
                        <div className="ms-auto">
                            <button className='bg-yellow-400 py-2 mt-3 lg:px-8 px-8  text-white rounded-lg '>Current</button>
                        </div>
                    </div>
                    <div className="border"></div>
                    <div className="mt-14 text-white flex gap-10">
                        <div className="">
                            <h1 className='font-bold lg:text-2xl md:text-2xl sm:text-2xl text-xl'>Lead Web Developer</h1>
                            <h1 className='mt-2'>Uber</h1>
                        </div>
                        <div className="ms-auto">
                        <button className='bg-yellow-400 py-2 mt-3 lg:px-8 px-20  text-white rounded-lg '>2018-2020</button>
                        </div>
                    </div>
                    <div className="border"></div>
                    <div className="mt-14 text-white flex gap-10">
                        <div className="">
                            <h1 className='font-bold lg:text-2xl md:text-2xl sm:text-2xl text-xl'>Web Developer</h1>
                            <h1 className='mt-2'>Linked</h1>
                        </div>
                        <div className="ms-auto">
                        <button className='bg-yellow-400 py-2 mt-3 lg:px-8 px-20  text-white rounded-lg '>2018-2020</button>
                        </div>
                    </div>
                    <div className="border"></div>
                </div>
                <div className="lg:col-span-6 col-span-12 lg:flex">
                    <div className="mt-10">
                        <h1 className='text-3xl font-bold text-gray-500'>Skills</h1>
                        <div className="border mt-2 "></div>
                        <div className="flex gap-2 mt-4 font-bold">
                            <h1 className='border hover:bg-yellow-400 text-white hover:text-black transition duration-300  lg:py-3 lg:px-3 rounded-lg  p-2'>Html</h1>
                            <h1 className='border hover:bg-yellow-400 text-white hover:text-black transition duration-300  lg:py-3 lg:px-3 rounded-lg p-2'>CSS</h1>
                            <h1 className='border hover:bg-yellow-400 text-white hover:text-black transition duration-300  lg:py-3 lg:px-3  rounded-lg p-2'>Front-end</h1>
                            <h1 className='border hover:bg-yellow-400 text-white hover:text-black transition duration-300  lg:py-3 lg:px-3 p-2 rounded-lg'>PHP</h1>
                        </div>
                        <div className="flex mt-4 gap-2 font-bold">
                            <h1 className='border hover:bg-yellow-400 text-white hover:text-black transition duration-300  py-2 lg:px-3 rounded-lg'>Back-end</h1>
                            <h1 className='border hover:bg-yellow-400 text-white hover:text-black transition duration-300  py-2 lg:px-3 px-1 rounded-lg'>Java Scropt</h1>
                            <h1 className='border hover:bg-yellow-400 text-white hover:text-black transition duration-300  py-2 lg:px-3 px-1 rounded-lg'>Laravel</h1>
                            <h1 className='border hover:bg-yellow-400 text-white hover:text-black transition duration-300  py-2 lg:px-3 px-1 rounded-lg'>C++</h1>
                        </div>
                        <div className="flex mt-3 font-bold">
                            <h1 className='border hover:bg-yellow-400 text-white  transition duration-300  py-2 px-3 rounded-lg'>Figma</h1>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-6 col-span-12">
                    <div className="mt-10">
                        <h1 className='text-3xl font-bold text-gray-500'>Tools I use every day</h1>
                        <div className="border mt-2"></div>
                        <div className="text-white">
                            <div className="">
                                <div className="flex gap-5 mt-5 flex-wrap">
                                    <i class="bi bi-filetype-html border hover:bg-yellow-400 hover:text-black
                                    text-2xl text-white  transition duration-300  py-2 px-3 rounded-lg"></i>
                                    <i class="bi bi-filetype-html border hover:bg-yellow-400 hover:text-black
                                    text-2xl text-white  transition duration-300  py-2 px-3 rounded-lg"></i>
                                    <i class="bi bi-filetype-html border hover:bg-yellow-400 hover:text-black
                                    text-2xl text-white  transition duration-300  py-2 px-3 rounded-lg"></i>
                                    <i class="bi bi-filetype-html border hover:bg-yellow-400 hover:text-black
                                    text-2xl text-white  transition duration-300  py-2 px-3 rounded-lg"></i>
                                    <i class="bi bi-filetype-html border hover:bg-yellow-400 hover:text-black
                                    text-2xl text-white  transition duration-300  py-2 px-3 rounded-lg"></i>
                                </div>
                                <div className="flex mt-5 gap-5">
                                    <i class="bi bi-filetype-html border hover:bg-yellow-400 text-white  transition duration-300 text-2xl  py-2 px-3 rounded-lg"></i>
                                    <i class="bi bi-filetype-html border hover:bg-yellow-400 text-white  transition duration-300 text-2xl  py-2 px-3 rounded-lg"></i>
                                    <i class="bi bi-filetype-html border hover:bg-yellow-400 text-white  transition duration-300 text-2xl  py-2 px-3 rounded-lg"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 mt-20">
                    <div className="">
                        <h1 className='font-bold text-3xl text-gray-500'>Freelance Clients</h1>
                        <div className="border mt-4"></div>
                        <div className="">
                            <div className="flex justify-between text-gray-500 flex-wrap relative group">
                                <img src={Images2} alt="" className='mt-10 brightness-50 group-hover:filter group-hover:brightness-200 transition duration-200 '  />
                                <div className="lg:border mt-6 brightness-50"></div>
                                <img src={Images2} alt="" className='mt-10 brightness-50 group-hover:filter group-hover:brightness-200 transition duration-300' />
                                <div className="lg:border mt-6 brightness-50"></div>
                                <img src={Images3} alt="" className='mt-10 brightness-50 group-hover:filter group-hover:brightness-200 transition duration-300' />
                                <div className="lg:border mt-6 brightness-50"></div>
                                <img src={Images4} alt="" className='mt-10 brightness-50 group-hover:filter group-hover:brightness-200 transition duration-300' />
                                <div className="lg:border mt-6 brightness-50"></div>
                                <img src={Images5} alt="" className='mt-10 brightness-50 group-hover:filter group-hover:brightness-200 transition duration-300' />
                                <div className="lg:border mt-6 brightness-50"></div>
                                <img src={Images6} alt="" className='mt-10 brightness-50 group-hover:filter group-hover:brightness-200 transition duration-300' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Resume

