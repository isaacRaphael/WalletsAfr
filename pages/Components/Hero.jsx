import React from 'react'
import Zoom from 'react-reveal/Zoom';

const Hero = ()  => {
  return (
    <div className='w-full flex h-[1000px] bg-black justify-center items-center px-36 sm:px-10'>
        <Zoom>
        <div className='w-1/2 lg:w-full h-full flex flex-col justify-center items-start '>
        <img className='my-6' src="./stars.png"/>
        
        <h1 className='text-white font-[Spectral, serif] text-[80px] sm:text-[50px] welcome-text leading-[5.0rem] sm:leading-[3.0rem] '>
            One digital wallet,<br />
            Multi Currency Cards...
        </h1>
        
        <p className='text-white text-2xl my-4 sm:text-md'>
        Buy airtime, pay bills, perform money transfers and make seamless payments <br />
        everywhere from your digital wallet and with our magic VISA cards.
        </p>
        <div className='mt-2 flex w-full gap-4'>
            <button className='px-10 py-4 text-white font-semibold bg-[#00C9B6]'>
                Get Started
            </button>
            <img src="./applestore.png" alt="" />
            <img src="./playstore.png" alt="" />

        </div>
        <div className='mt-[8rem] text-white text-xl'>How it works <span className='ml-2'>{'>'}</span></div>
        </div>
        </Zoom>
        <Zoom>
        <div className='w-1/2 flex items-end justify-center lg:hidden'>
            <img className='w-full h-[800px] object-contain' src="./hands.png" alt="" />
        </div>
        </Zoom>
    </div>
  )
}

export default Hero