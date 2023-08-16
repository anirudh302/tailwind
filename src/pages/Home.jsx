import React from 'react'


const Home = () => {
    return <>
        <div className=" bg-slate-900">
            <div className="md:flex lg:flex p-5 justify-between ">
                <div className="flex gap-5 mx-8 text-center text-gray-500 mt-2">
                    <i class="bi bi-envelope font-bold text-1xl text-yellow-500"></i><p>anirudhtupe3@gmail.com</p>
                    {/* <i className='bi bi-telephone text-yellow-500 text-1xl font-bold sm:hidden'></i><p className=''>+9096367036</p> */}
                </div>
                <div className="text-center mt-2">
                    <i className='bi  bi-facebook mx-4 hover:text-yellow-300  rounded-full text-gray-500'></i>
                   <a href="https://twitter.com/anirudh_tupe"> <i className='bi  bi-twitter mx-4  hover:text-yellow-300  rounded-full text-gray-500'></i></a>
                    <i className='bi  bi-youtube mx-4  hover:text-yellow-300  rounded-full text-gray-500'></i>
                    <i className='bi  bi-linkedin mx-4 hover:text-yellow-300  rounded-full text-gray-500'></i>
                </div>
            </div>
        </div>
    </>
}
export default Home