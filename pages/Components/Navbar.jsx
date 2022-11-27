import React from 'react'

const Navbar = () => {
  return (
    <div className='flex text-xl w-full justify-between  items-center py-10 px-24 bg-black text-white sticky top-0 z-10 shadow-2xl '>
        <div className='flex flex-col'>
            <h1 className='text-[#00C9B6] text-4xl'>wallets</h1>
            <h1 className='text-xl text-right'>.africa</h1>
        </div>
        <div className='flex gap-24 items-center'>
        <ul className=' flex gap-10 lg:hidden'>
            <li>Why us</li>
            <li>Products</li>
            <li>About</li>
            <li>Pricing</li>
        </ul>
        <button className='px-10 py-4 text-white bg-[#00C9B6]'>
            Log In
        </button>
        </div>
        

    </div>
  ) 
}

export default Navbar