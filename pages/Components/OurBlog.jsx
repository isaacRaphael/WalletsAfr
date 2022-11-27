import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

const OurBlog = () => {
  return (
    <div className='flex w-full h-[1100px] bg-white flex-col'>

        <div className='w-[80%] mx-auto py-28'>
            <Fade>
            <h1 className='text-4xl font-semibold o-text'>Our Blog</h1>
            <div className='w-full flex justify-between mt-4'>
                <h1 className='font-semibold text-lg'>Checkout post on what we have been up to...</h1>
                <h1 className='text-[#5C2799] text-lg'>View all posts</h1>
            </div>
            </Fade>
            <Zoom right>
            <div className='flex justify-center items-center my-24'>
                <img className='' src="./grid.png" alt="" />
            </div>
            </Zoom>

            <Zoom>
            <div className='flex justify-center items-center translate-y-26'>
                <img src="./banner.png" alt="" />
            </div>
            </Zoom>

        </div>
    </div>
  )
}

export default OurBlog