import React from 'react'
import Images1 from "./../assets/images/portfolio/ms-1.jpg"
import Images2 from "./../assets/images/portfolio/ms-2.jpg"

const ImagesInfo = () => {
    return <>
        <div className="">
            <div className="text-center py-20">
                <h1 className='lg:text-5xl text-4xl text-white font-bold'>Let’s Check my Projects</h1>
                <div className="mt-10 text-white text-xl">
                    <p>Donec dignissim, metus sit amet suscipit mauris vul</p>
                    <p>putate odio, quis cursus nunc urna Aliqum tell us.</p>
                    <p>Quisque hendrerit ..</p>
                </div>
            </div>
            <div className="grid grid-cols-12 mx-8 ">
                <div className="lg:col-span-6">
                    <div className="rounded-2xl">
                        <img src={Images1} alt=""/>
                    </div>
                </div>
                <div className="lg:col-span-6">
                    <div className="rounded-2xl">
                        <img src={Images2} alt=""  className='w-[90%] h-[90%]' />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ImagesInfo