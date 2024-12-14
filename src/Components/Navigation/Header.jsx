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
    <div className='w-full bg-white flex gap-6 text-xl text-black border items-center py-5 justify-between'>
      <div className=' w-11/12  mx-auto flex-row flex justify-between'>

     <div className='font-semibold text-center hover:text-[#589168]'>
      Counselor
     </div>
     <div className='font-bold text-sm  flex gap-10'>
      {
        navitem.map((val,i)=>{
          return(
    <div className='hover:text-[#589168] flex items-center'>
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
