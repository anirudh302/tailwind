import React from 'react'

const Icon = () => {
    return <>
        <div className="">
            <div className="grid grid-cols-12 mt-20 mx-8 h-full gap-6">
                <div className=" col-span-12 md:col-span-6 lg:col-span-3 ">
                    <div className=" text-white text-center py-6 flex justify-center hover:bg-yellow-500 hover:text-black text-2xl  rounded-lg border transition duration-300 border-yellow-400 border-dotted font-bold">
                        <div className="h-[32%] flex gap-3">
                            <i class="bi bi-stack-overflow text-3xl font-bold"></i>
                            <div className="">
                                <p>S.OverlFow</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-span-12 md:col-span-6 lg:col-span-3 ">
                    <div className=" text-white text-center py-6 flex justify-center hover:bg-yellow-500 hover:text-black text-2xl  rounded-lg border transition duration-300 border-yellow-400  border-dotted font-bold">
                        <div className="h-[32%] flex gap-3">
                            <i class="bi bi-github text-3xl font-bold"></i>
                            <div className="">
                                <p>Github</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-span-12 md:col-span-6 lg:col-span-3 ">
                    <div className=" text-white text-center py-6 flex justify-center hover:bg-yellow-500 hover:text-black text-2xl  rounded-lg border transition duration-300 border-yellow-400  border-dotted font-bold">
                        <div className="h-[32%] flex gap-3">
                            <i class="bi bi-medium text-3xl font-bold"></i>
                            <div className="">
                                <p>Medium</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-span-12 md:col-span-6 lg:col-span-3 ">
                    <div className=" text-white text-center py-6 flex justify-center hover:bg-yellow-500 hover:text-black text-2xl  rounded-lg border  transition duration-300 border-yellow-400  border-dotted font-bold">
                        <div className="h-[32%] flex gap-3">
                            <i class="bi bi-linkedin text-3xl font-bold"></i>
                            <div className="">
                                <p>Linkedin</p>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    </>
}

export default Icon