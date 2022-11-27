import React from 'react'
import Zoom from 'react-reveal/Zoom'

const CardHero = () => {
  return (
    <div className='w-full h-[1059px] bg-[#E6F4F8]'>
        <div className='w-[80%] mx-auto h-full flex'>
            <Zoom>
            <div className='w-1/2 h-full  pt-28'>
              <div className='flex gap-4 w-full'><img className='object-contain' src="./dot.png" alt="" /><h1 className='text-2xl font-semibold o-text'>NEXT GENERATION CARDS</h1></div>
              <div className='sel-collection pt-28'>
                <div className='border-l-4 [border-color:black] h-[150px] py-2 px-4'>
                  <h1 className='text-black text-4xl my-2 o-text'>Lorem ipsum dolor sit amet.</h1>
                  <p className='max-w-[600px] text-lg text-[#bdbdbd]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim .</p>
                </div>
                <div className='border-l-4 [border-color:#bdbdbd] h-[150px] py-2 px-4'>
                  <h1 className='text-[#666] text-4xl my-2 o-text'>Lorem ipsum dolor sit amet.</h1>
                  <p className='max-w-[600px] text-lg text-[#bdbdbd]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim .</p>
                </div>
                <div className='border-l-4 [border-color:#bdbdbd] h-[150px] py-2 px-4'>
                  <h1 className='text-[#666] text-4xl my-2 o-text'>Lorem ipsum dolor sit amet.</h1>
                  <p className='max-w-[600px] text-lg text-[#bdbdbd]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim .</p>
                </div>
                <div className='border-l-4 [border-color:#bdbdbd] h-[150px] py-2 px-4'>
                  <h1 className='text-[#666] text-4xl my-2 o-text'>Lorem ipsum dolor sit amet.</h1>
                  <p className='max-w-[600px] text-lg text-[#bdbdbd]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim .</p>
                </div>
              </div>
            </div>
            </Zoom>
            <div className='w-1/2 h-full flex items-center justify-center'>
              <Zoom>
                <img src="./cards.png" alt="" />
              </Zoom>
            </div>
        </div>
        
      </div>
  )
}

export default CardHero