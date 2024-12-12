//import {React, useState} from 'react'
import React from 'react'
import {Link} from 'react-router-dom'
import Model from '../UI/Model'

const Header = () => {
 //const[LoginShow, setLoginShow]= useState(false) 
 

 const navitem=[
  {
    title:"Home",
    path:"/"
  },
  {
    title:"About",
    path:"/about"
  },
  
  {
    title:"Councelor",
    path:"/councelor"
  },
  {
    title:"Councelor",
    path:"/councelor"
  },
  {
    title:"Pricing",
    path:"/pricing"
  },
  {
    title:"Blog",
    path:"/blog"
  },
  {
    title:"Services",
    path:"/services"
  },
  {
    title:"Contact",
    path:"/contact"
  },
 ]
  
  return (
    <div className='  bg-white flex gap-6 px-3 py-2 text-xl text-black border items-center justify-between h-20'>
      <div className=' w-11/12 flex-row flex justify-between m-20'>

     <div className='font-semibold text-center hover:text-[#589168]'>
      Counselor
     </div>
     <div className='font-bold text-sm  flex gap-10'>
      {
        navitem.map((val,i)=>{
          return(
    <div className='hover:text-[#589168]'>
    <Link to={val.path}> {val.title}</Link>
    </div>
          )
        })
      }
     </div>
      </div>

     </div>
 
  )
}

export default Header
