import React from 'react'
import { BiDollar } from "react-icons/bi";

const Affordable = () => {
  const getStarted=[
    {
      price:"$49",
      title:"For Adults",
      items:[
        {
          title:"Individual Counseling"
        },
        {
          title:"Individual Counseling"
        },
        {
          title:"Individual Counseling"
        }
      ],
      buttons:"Get started"

    },
    {
      price:"$79",
      title:"For Children",
      items:[
        {
          title:"Individual Counseling"
        },
        {
          title:"Individual Counseling"
        },
        {
          title:"Individual Counseling"
        }
      ],
       buttons:"Get started"

    },
    {
      price:"$109",
      title:"For Business",
      items:[
        {
          title:"Individual Counseling"
        },
        {
          title:"Individual Counseling"
        },
        {
          title:"Individual Counseling"
        }
      ],
      buttons:"Get started"

    },



    
  ]
  return (
    <div className='bg-green-100 h-screen'>
      <div className='flex flex-col p-16 bg-red-300 justify-center items-center  gap-4'>
        <div className='text-sm text-green-900 tracking-wider font-bold'>Price & Plans</div>
        <div className='text-4xl text-gray-800 font-bold tracking-wide '>Affordable Packages</div>
      </div>
      {
        // getStarted.map((val,i)=>{
        //   return (
        //     <div key={i}>
        //       {val.price}
        //         {val.title}
        //         {/* {val.items} */}
        //         {/* <button>
        //           {val.buttons}
        //         </button> */}
        //     </div>
        //   )
        // })
      }

      <div>
        
      </div>
      <div className='bg-blue-200 h-2/3 w-1/3 mx-auto flex rounded-md shadow-md'>


<div className=' flex w-full  h-1/3 flex-col border-b border-gray-300 mx-12 my-6 justify-center items-center gap-6 '>
        <div className='flex flex-row  '>
        <div className='text-gray-500 text-2xl'>< BiDollar/></div>
        <div className='text-green-700 text-6xl font-bold'>49</div>
        <div className='flex items-end'>/mo</div>
        </div>
        <div className='text-xl font-bold tracking-tight'>For Adults</div>
        </div>

        <div className='flex flex-col  '>
        <div>Items</div>
        <div>
        <button>Get Started</button>
        </div>
        </div>


       

        

      </div>
     
   
   


    </div>
  )
}

export default Affordable
