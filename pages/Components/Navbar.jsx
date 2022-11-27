import React from 'react'

const Navbar = () => {
  return (
    <div className='text-xl w-full  py-6 bg-black text-white sticky top-0 z-10 shadow-2xl '>
      <div className='w-[80%] mx-auto flex justify-between items-center sm:w-[90%]'>
        <div className='flex flex-col'>
            <h1 className='text-[#00C9B6] text-2xl'>wallets</h1>
            <h1 className='text-lg text-right'>.africa</h1>
        </div>
        <div className='flex gap-24 items-center'>
        <ul className=' flex gap-10 lg:hidden text-sm'>
            <li>Why us</li>
            <li>Products</li>
            <li>About</li>
            <li>Pricing</li>
        </ul>
        <button className='px-6 py-2 text-sm text-white bg-[#00C9B6]'>
            Log In
        </button>
        </div>
        
        </div>
    </div>
  ) 
}

export default Navbar