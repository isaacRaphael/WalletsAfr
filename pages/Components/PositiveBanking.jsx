import React from 'react'
import Zoom from 'react-reveal/Zoom'

const PositiveBanking = () => {
  return (
    
    <div className='w-full h-[1500px] py-28 '>
        <Zoom>
        <h1 className='text-[70px] text-center mt-4 o-text'>Positive banking at your fingertips. </h1>
        <div className='w-full flex justify-center items-center my-4'>
            <div className=' flex w-[400px] h-[50px] bg-gray-300 my-4 rounded-md'>
                    <div className='w-1/2 px-5 py-2 flex items-center justify-center border-r-2'>
                        <h1 className='text-xl'>Mobile App</h1>
                    </div>
                    <div className='w-1/2 px-5 py-2 flex items-center justify-center border-l-2'>
                        <h1 className='text-[#888] text-xl'>Web App</h1>
                    </div>
            </div>
        </div>
        <div className='w-full flex items-center justify-center mt-5'>
            <img src="./frame.png" alt="" />
        </div>
        <div className='w-full flex flex-col items-center justify-center'>
            <h1 className='text-center text-xl max-w-[880px] my-5 py-4 w-'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim .Lorem ipsum dolor sit amet,
             consectetur adipiscing elit, </h1>
             <button className='px-10 py-4 text-white my-5 bg-[#00C9B6]'>
                Sign up today, win cash prize
            </button>
        </div>
        </Zoom>
    </div>
  )
}

export default PositiveBanking