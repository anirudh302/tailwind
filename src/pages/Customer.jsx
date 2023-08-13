import React from 'react'
import Images1 from "./../assets/images/testimonial/av-4.png"
import Images2 from "./../assets/images/testimonial/av-7.png"

const Customer = () => {
    return <>
        <div className="bg-gray-950 mx-8">
            <div className="mt-20">
                <div className="text-center py-20">
                    <h1 className='text-yellow-400 font-bold'>CUSTOMER REVIEWS</h1>
                    <div className="lg:text-4xl text-4xl text-white mt-5 font-bold">
                        <h1>What’s Our Customer Say</h1>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="grid grid-cols-12">
                    <div className="lg:col-span-6 col-span-12 bg-gray-900 py-8 rounded-lg mx-8">
                        <div className="text-white flex gap-3 mx-10">
                            <i className='bi bi-star-fill text-yellow-400'></i>
                            <i className='bi bi-star-fill text-yellow-400'></i>
                            <i className='bi bi-star-fill text-yellow-400'></i>
                            <i className='bi bi-star-fill text-yellow-400'></i>
                            <i className='bi bi-star-fill text-yellow-400'></i>
                        </div>
                        <div className="text-white mx-10 mt-8">
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolor inventore repellendus soluta ullam provident deserunt laboriosam quae sit praesentium!</p>
                        </div>
                        <div className="">
                            <div className="mx-10 mt-5 flex text-white gap-5">
                                <img src={Images1} alt="" />
                                <div className="">
                                    <h1 className='font-bold'>Hugo Boss</h1>
                                    <p className='text-gray-500'>Travel Agent</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="lg:col-span-6 col-span-12 lg:mt-0 mt-5 bg-gray-900 py-8 rounded-lg mx-8">
                        <div className="text-white flex gap-3 mx-10">
                            <i className='bi bi-star-fill text-yellow-400'></i>
                            <i className='bi bi-star-fill text-yellow-400'></i>
                            <i className='bi bi-star-fill text-yellow-400'></i>
                            <i className='bi bi-star-fill text-yellow-400'></i>
                            <i className='bi bi-star-fill text-yellow-400'></i>
                        </div>
                        <div className="text-white mx-10 mt-8">
                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolor inventore repellendus soluta ullam provident deserunt laboriosam quae sit praesentium!</p>
                        </div>
                        <div className="">
                            <div className="mx-10 mt-5 flex text-white gap-5">
                                <img src={Images2} alt="" />
                                <div className="">
                                    <h1 className='font-bold'>Adward Gull</h1>
                                    <p className='text-gray-500'>Travel Agent</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Customer