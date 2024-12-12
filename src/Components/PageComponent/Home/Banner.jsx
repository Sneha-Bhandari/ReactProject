import React from 'react'

const Banner = () => {
  return (
    <div>
      <div className='flex flex-row items-center w-fit mx-auto relative bg-slate-500 '>

      <div className='bg-slate-600  rounded-full h-16 w-16 '>
        <button  className='p-2'> <svg className=' h-10 w-10 'xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.464 2.114a1 1 0 0 0-1.033.063l-13 9a1.003 1.003 0 0 0 0 1.645l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-.536-.886M17 19.091L6.757 12L17 4.909z"/></svg></button>
      </div>

        <img className='h-72 w-72  mx-auto flex items-center py-10 px-11' src="https://i.pinimg.com/736x/f0/bc/45/f0bc45f156279851579de870e4756e2e.jpg" alt="" />

      <div className='bg-slate-600 h-16 w-16 rounded-full'>
        <button className='p-2'><svg className='h-10 w-10'xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5.536 21.886a1 1 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886M7 4.909L17.243 12L7 19.091z"/></svg></button>
      </div>

      </div>
    </div>
  )
}

export default Banner
