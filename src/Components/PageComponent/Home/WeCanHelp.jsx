import React, { useState } from 'react'

function WeCanHelp() {

  const sections = [
    {
      name: 'Relation Problem',
      content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      image:'img1.jpg'
    },
    {
      name: 'Couples Counseling',
      content: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      image: '2.jpg'
    },
    {
      name: 'Depression Treatment',
      content: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      image: '3.jpg'
    },
    {
      name: 'Family Problem',
      content: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
      image: '4.jpg'
    },
    {
      name: 'Personal Problem',
      content: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
      image: '5.jpg'
    },
    {
      name: 'Business Problem',
      content: 'One day however a small line of blind text by the name of Lorem Ipsum decided to leave.',
      image: '6.jpg'
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <div className='bg-white w-full'>
      <div className=' mx-28 flex flex-col gap-12 py-9'>
        <div className='flex flex-col items-center justify-center  gap-3 py-8 '>
          <h1 className='text-sm font-bold text-green-900 tracking-wider uppercase'>our services</h1>
          <h6 className='text-4xl text-gray-700 font-bold'>We Can Help You With This Situation</h6>
        </div>
        <div className='flex  w-full  gap-4 '>
          <div className=' w-1/2 b flex flex-col  gap-2'>
            {
              sections.map((val, i) => {
                return (
                  <div key={i} className=' relative flex h-fit text-xl  font-light '>
                    <button
                      onClick={() => setOpen(i)}
                      className={`w-96 px-4 py-6 flex items-center rounded-md font-semibold border border-gray-500 ${open === i ? 'bg-[#589168] text-white' : 'bg-white text-black'}`}
                    >
                      {val.name}
                    </button>
                  </div>
                )
              })
            }
          </div>
          <div>
            
          </div>
          <div className='w-full h-1/2 '>
            {
              sections.map((item, index) => {
                return (
                  index === open && (
                    <div key={index} className=' gap-2 flex flex-col'>
                      <img src={item.image} alt={item.name} className='w-full h-fit bg-gray-200 object-cover' />
                      <h1 className='text-3xl font-bold mb-4 '>{item.name}</h1>
                      <p className='text-gray-600'>{item.content}</p>
                    </div>
                  )
                )
              })
            }
          </div>
        </div>
      </div>
    </div >
  )
}

export default WeCanHelp
