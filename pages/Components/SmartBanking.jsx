import React from 'react'
import Zoom from 'react-reveal/Zoom'

const SmartBanking = () => {
  return (
    <div className='flex w-full h-[1059px] bg-[#3B1E62]'>
    <div className='w-[80%] mx-auto flex'>
        <Zoom left>
        <div className='w-1/2 flex flex-col py-28'>
            <h1 className='text-white text-[60px] o-text fond-bold max-w-[700px] leading-[4.2rem]'>Smart banking with transparent and cheaper fees...</h1>

            <div className='grid w-full grid-cols-2 gap-5 my-10'>
                <div className='w-full h-[300px] flex flex-col justify-center gap-5'>
                    <div className='w-[54px] h-[54px] bg-[#764824]'></div>
                    <h1 className='text-2xl text-white o-text'>Flexible Wallet</h1>
                    <p className='max-w-[400px] text-[#ffffff70] text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>

                <div className='w-full h-[300px] flex flex-col justify-center gap-5'>
                </div>

                <div className='w-full h-[300px] flex flex-col justify-center gap-5'>
                    <div className='w-[54px] h-[54px] bg-[#764824]'></div>
                    <h1 className='text-2xl text-white o-text'>Flexible Wallet</h1>
                    <p className='max-w-[400px] text-[#ffffff70] text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>

                <div className='w-full h-[300px] flex flex-col justify-center gap-5'>
                    <div className='w-[54px] h-[54px] bg-[#764824]'></div>
                    <h1 className='text-2xl text-white o-text'>Flexible Wallet</h1>
                    <p className='max-w-[400px] text-[#ffffff70] text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
            </div>
        </div>
        </Zoom>
        <Zoom right>
        <div className='w-1/2 flex items-center justify-center'>
            <img src="./phone.png" alt="" />
        </div>
        </Zoom>
    </div>
    </div>
  )
}

export default SmartBanking