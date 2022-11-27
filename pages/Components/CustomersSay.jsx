import React from 'react'
import Fade from 'react-reveal/Fade'

const CustomersSay = () => {
  return (
    
    <div className='flex w-full h-[1300px] bg-black py-28'>
        <Fade>
        <div className='w-[80%] mx-auto'>
        <div className='w-full'>
            <h1 className='text-[#ccc] text-[35px] o-text'>What our customers are saying…</h1>
            <p className='text-[#ccc] text-[18px] my-2 o-text'>We serve thousands of customers and this is what people are saying about us</p>
        </div>
        <div className='w-full flex items-center justify-center'>
            <div className='text-center text-[35px] text-[#ccc] py-[12rem] o-text max-w-[1200px] relative'>The Wallets payroll is seamless, the cards & sub wallets allow us to be flexible with payments and 
                imprest to people outside of the main founding team. Hands down the Wallets
                 team is the most responsive and customer-centric team I have ever worked with. Similar to Amazon’s 
                 focus on the customer I see Wallets having that same outlook
                 <img className='absolute top-24 -left-24 [opacity:0.1] -z-1' src="./qoute1.png" alt="" />
                 <img className='absolute bottom-24 -right-24 [opacity:0.1] -z-1' src="./qoute2.png" alt="" />
                 </div>
        </div>
        <div className='w-full py-10'>
            <div className='flex gap-6 items-center'>
                <img src="./graycircle.png" alt="" />
                <div className=' flex flex-col gap-2 items-center'>
                    <h1 className='o-text text-xl text-white'>Co-founder, Releaf (YC S17)</h1>
                    <p className='text-[#ccc] text-lg'>Co-founder, Releaf (YC S17)</p>
                </div>
            </div>
        </div>
        <div className='flex justify-between mt-8'>
            <img className='object-contain' src="./dots.png" alt="" />
            <img src="./arrows.png" alt="" />
        </div>
        </div>
        </Fade>
    </div>
    
  )
}

export default CustomersSay