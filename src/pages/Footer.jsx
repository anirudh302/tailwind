import React from 'react'
// import Images from "./../assets/images/bg/dev-ft-bg.jpg"

const Footer = () => {
    return <>
        {/* <div className=""> */}
        <div className="mx-8 bg-gray-950 mt-20">
            {/* <div className="border-2"></div> */}
            <div className="relative">
                {/* <img src={Images} alt="" /> */}
                <div className="">
                    <div className="grid grid-cols-12">
                        <div className="lg:col-span-3 col-span-12">
                            <div className="py-20 px-5">
                                <img src="https://quomodothemes.website/fallow/assets/images/logo/logo-dev-f.svg" alt="" />
                                <div className="text-white py-5 lg:py-10 flex">
                                    <p>We work with a passion of taking challenges and creating new ones in advertising sector.</p>
                                    {/* <div className="border"></div> */}
                                </div>
                                <div className="text-white flex gap-5">
                                    <i class="bi bi-facebook border rounded-2xl px-2 hover:bg-yellow-400 hover:text-black py-1 text-center"></i>
                                    <i class="bi bi-twitter border rounded-2xl px-2 hover:bg-yellow-400 hover:text-black py-1 text-center"></i>
                                    <i class="bi bi-instagram border rounded-2xl px-2 hover:bg-yellow-400 hover:text-black py-1 text-center"></i>
                                    <i class="bi bi-youtube border rounded-2xl px-2 hover:bg-yellow-400 hover:text-black py-1 text-center"></i>
                                </div>
                                    {/* <div className="border mt-5"></div> */}
                            </div>
                        </div>
                        <div className="lg:col-span-3 col-span-12">
                            <div className="lg:py-20 py-5 px-10">
                                <h1 className='text-white lg:text-3xl text-2xl font-bold'>Links</h1>
                                <div className="mt-14 text-white font-bold ">
                                    <h1 className=' lg:mt-2 mt-1 hover:text-yellow-400'>Home</h1>
                                    <h1 className=' lg:mt-2 mt-1 hover:text-yellow-400'>Service</h1>
                                    <h1 className=' lg:mt-2 mt-1 hover:text-yellow-400'>Blog</h1>
                                    <h1 className=' lg:mt-2 mt-1 hover:text-yellow-400'>Contact Us</h1>
                                </div>
                                {/* <div className="border mt-10"></div> */}
                            </div>
                        </div>
                        <div className="lg:col-span-3 col-span-12">
                            <div className="py-20 px-10">
                                <h1 className='text-white text-3xl font-bold'>Services</h1>
                                <div className="mt-14 text-white font-bold">
                                    <h1 className='mt-2 hover:text-yellow-400'>Contact & Faq</h1>
                                    <h1 className='mt-2 hover:text-yellow-400'>Track Your Order</h1>
                                    <h1 className='mt-2 hover:text-yellow-400'>Track Your Order</h1>
                                    <h1 className='mt-2 hover:text-yellow-400'>Trade Program</h1>
                                </div>
                                {/* <div className="border mt-10"></div> */}
                            </div>
                        </div>
                        <div className="lg:col-span-3 col-span-12">
                            <div className="lg:py-20 px-5">
                                <h1 className='text-white text-3xl font-bold'>Official Info:</h1>
                                <div className="mt-14 text-white font-bold flex gap-2">
                                    <i class="bi bi-geo-alt-fill text-yellow-400"></i>
                                    <p>30 Commercial Road Fratton, Australia</p>
                                </div>
                                <div className="flex text-white gap-2 font-bold">
                                    <i class="bi bi-telephone-fill text-yellow-400"></i>
                                    <p>1-888-452-1505</p>
                                </div>
                                <div className="mt-4 text-white font-bold text-2xl">
                                    <h1>Subscribe Newsletter</h1>
                                </div>
                                <div className="border-none">
                                    <input type="text" className='lg:px-1 lg:py-3 rounded mt-3 text-center' placeholder='Emali Address' /> <button className='lg:py-3 px-1 rounded bg-yellow-400 text-white'>Subscribe</button>
                                </div>
                                {/* <div className="border"></div> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="border-2"></div> */}
                </div>
            </div>
        </div>

        {/* </div> */}
    </>
}

export default Footer