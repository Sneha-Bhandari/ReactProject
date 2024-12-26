import React from 'react'
import { FaPlay } from "react-icons/fa";


function BestCounseling() {
  return (
    <div className='bg-white  '>
    <div className='flex h-screen w-11/12 mx-auto '>
    <div className='bg-gray-300 h-full w-1/2 '>
    
          <img
            src="img1.jpeg" 
            alt="Counselor"
            className="h-full object-cover "
          />
     
    </div>
    <div className='bg-red-200 h-full w-1/2 '>
      <div className='bg-gray-200  w-full h-full flex flex-col justify-evenly p-12 '>

      <div className='text-green-900 font-bold uppercase tracking-wider text-sm' >Welcome to Counselor</div>
      <div className='text-gray-900 font-extrabold text-4xl leading-relaxed'>Best Counseling Funding Network Worldwide.</div>
      <div className='text-gray-600 text-base leading-relaxed mt-4 tracking-wide p-2'>
        <p className=''>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
        </p>
        <p className='mt-4 text-gray-600'>
        On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.
        </p>
      </div>
     

       

     
      <div className='flex flex-row gap-4 items-center '>
        <div className='border border-gray-900 p-3  text-green-900 '>< FaPlay/></div>
        <button className="   text-black py-2 px-6  tracking-tighter font-thin">WATCH OUR CONSULTANT VIDEO</button>
      </div>
      </div>

    </div>
    </div>

    </div>
  )
}

export default BestCounseling
