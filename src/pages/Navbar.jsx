import React, { useState } from 'react'

const Navbar = () => {
    const [show, setshow] = useState(false)
    return <div className=' mx-8 sticky top-5 z-50'>
        <div className="bg-gray-200 rounded-2xl  p-5 my-3  ">
            <div className=" flex justify-between ">
                <img src="https://quomodothemes.website/fallow/assets/images/logo/logo-dev-m.svg" alt="" />
                <div className=' hidden lg:block'>
                    <div className="flex gap-5 justify-center mt-4 ">
                        <div className="">
                            <select className='bg-gray-200 text-gray-700 font-bold'>
                                <option value="">Home</option>
                            </select>
                        </div>
                        <div className="">
                            <select className='bg-gray-200 font-bold text-gray-700 '>
                                <option value="">Services</option>
                            </select>
                        </div>
                        <div className="">
                            <select className='bg-gray-200 font-bold text-gray-700 '>
                                <option value="">Portfolio</option>
                            </select>
                        </div>
                        <div className="">
                            <select className='bg-gray-200 font-bold text-gray-700 '>
                                <option value="">Blog</option>
                            </select>
                        </div>
                        <div className="">
                            <select className='bg-gray-200 font-bold text-gray-700 '>
                                <option value="">Pages</option>
                            </select>
                        </div>
                        <div className="">
                            <select className='bg-gray-200 font-bold text-gray-700 '>
                                <option value="">About</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <button className='group rounded-2xl py-3 px-8   font-bold bg-yellow-500'>Let's Talk<i class="bi bi-arrow-right group-hover:ms-3 absolute text-1xl"></i></button>
                </div>
                <button className='lg:hidden block' onClick={e => setshow(!show)}><i class="bi bi-list text-3xl"></i></button>
            </div>
           

        </div>
        <div className="relative">
            <div className={show ? "lg:hidden absolute bg-gray-200 right-0   flex flex-col w-full " : "hidden "}>
                <a className='hover:bg-slate-300 p-5' href="">Home</a>
                <a className='hover:bg-slate-300 p-5' href="">Services</a>
                <a className='hover:bg-slate-300 p-5' href="">Portfolio</a>
                <a className='hover:bg-slate-300 p-5' href="">Blog</a>
                <a className='hover:bg-slate-300 p-5' href="">Pages</a>
                <a className='hover:bg-slate-300 p-5' href="">About</a>
            </div>
        </div>


    </div>
}

export default Navbar