import React from 'react'

const Footer  = () => {
  return (
    <div className='flex w-full h-[1000px] bg-black py-[25rem]'>
        <div className='w-[80%] mx-auto'>
        <div className='flex'>
            <div className='w-[35%]'>
                <div className='flex flex-col max-w-[110px]'>
                <h1 className='text-[#00C9B6] text-4xl'>wallets</h1>
                <h1 className='text-xl text-right text-white'>.africa</h1>
            </div>
        </div>
        <div className='w-[65%] grid grid-cols-4'>
            <div className='flex flex-col gap-10'>
                <h1 className='text-white o-text text-2xl'>About us</h1>
                <ul className='flex flex-col gap-6 text-white text-xl opacity-50'>
                    <li>Company</li>
                    <li>FaQs</li>
                    <li>Careers</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='flex flex-col gap-10'>
            <h1 className='text-white o-text text-2xl'>Products</h1>
                <ul className='flex flex-col gap-6 text-white text-xl opacity-50'>
                    <li>For Customers</li>
                    <li>For Businesses</li>
                    <li>For Debelopers</li>
                </ul>
            </div>
            <div className='flex flex-col gap-10'>
                <h1 className='text-white o-text text-2xl'>Legal</h1>
                <ul className='flex flex-col gap-6 text-white text-xl opacity-50'>
                    <li>Private Policy</li>
                    <li>Terms of Service</li>
                    <li>Know your customer</li>
                </ul>
            </div>
            <div className='flex flex-col gap-10'>
                <h1 className='text-white o-text text-2xl'>Contact Us</h1>
                <ul className='flex flex-col gap-6 text-white text-xl opacity-50'>
                    <li>Join Our Telegram Community</li>
                    <li>Hello</li>
                    <li>Press</li>
                </ul>
            </div>
        </div>
        </div>
        <div className='w-full flex items-center justify-between mt-[14rem] opacity-50'>
            <h1 className='text-white text-xl o-text'>© Enterprise Wallet Payments Limited</h1>
            <div className='flex gap-4'>
                <img src="./twitter.png" alt="" />
                <img src="./instagram.png" alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer