import React from "react";
import { IoLogoTwitter } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram,FaMap, FaHeart } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { IoIosCall } from "react-icons/io";
const Footer1 = () => {
  const socialmedia=[
    {
      icon:< IoLogoTwitter/>,  
    },
    {
      icon:<TiSocialFacebook/>,  
    },
    {
      icon:<FaInstagram/>,  
    }
  ]
const foot= [
  {
    title:"Explore",
    items:[
      {
        title:"About",
        icon:<MdOutlineArrowForwardIos />
      },
      {
        title:"Contact",
        icon:<MdOutlineArrowForwardIos />
      }, {
        title:"What we do",
        icon:<MdOutlineArrowForwardIos />
      }, {
        title:"Plan & Pricing",
        icon:<MdOutlineArrowForwardIos />
      }]
  },
  {
    title:"Legal",
    items:[
       {
        title:"Join us",
        icon:<MdOutlineArrowForwardIos />
      }, {
        title:"Blog",
        icon:<MdOutlineArrowForwardIos />
      }, {
        title:"Privacy",
        icon:<MdOutlineArrowForwardIos />
      }, {
        title:"Conditions",
        icon:<MdOutlineArrowForwardIos />
      },
      ]
  },
  {
    title:"Company",
    items:[
       {
        title:"About Us",
        icon:<MdOutlineArrowForwardIos />
      }, {
        title:"Blog",
        icon:<MdOutlineArrowForwardIos />
      }, {
        title:"Contact",
        icon:<MdOutlineArrowForwardIos />
      }, {
        title:"Careers",
        icon:<MdOutlineArrowForwardIos />
      },
     ]
  },
  {
    title:"Have a Questions?",
    items:[
      
      {
        title:"203 Fake St. Mountain View, San Francisco, California, USA",
        icon:<FaMap />
      },
      {
        title:"+2 392 3929 210",
        icon:<IoIosCall />
      },
      {
        title:"info@yourdomain.com",
        icon:<SiMinutemailer />
      },
    ]
  },

]
  return (
   <div className="bg-gray-800">
     <div className=" text-white grid grid-cols-7  w-10/12 mx-auto py-20 gap-4">
      <div className=" col-span-2 h-56 place-content-between grid   ">
        <div className="font-semibold text-xl ">Counselor</div>
        <div>
          <p className="w-44">
            Far far away, behind the word mountains, far from the countries.
          </p>
        </div>
        <div className="flex flex-row gap-4 ">

          {
            socialmedia.map((val,i)=>{
              return(
                <div key={i} className="bg-[#589168] hover:scale-110 transition-all delay-75 duration-1000 ease-in-out text-2xl justify-center items-center flex rounded-full h-12 w-12">
               {val.icon}
        </div>
              )
            })
          }
    
        </div>
      </div>

    
      {foot.map((value,index)=>{
      return <div key={index} className={` font-semibold w-fit grid h-56 ${index===foot.length-1?"col-span-2":"col-span-1"}`}>
        <div className="text-xl font-medium h-fit ">
          {value.title}
        </div>
        <ol className="grid gap-5">
          {value.items.map((item, i)=>{
            return(
            <li key={i} className="text-sm flex items-center gap-3">
             <span className="text-sm">{item.icon}</span> <h1 className="font-extralight">{item.title}</h1>
            </li>
            )
          })}
        </ol>
      </div>
      })}
    

    </div>

    <div className="bg-black py-8  w-full  ">
      <div className="w-10/12 mx-auto text-gray-500 flex  justify-center items-center space-x-3 py-4">
      <h1></h1>Copyright ©2024 All rights reserved | This template is made with  <FaHeart/> by <span className="text-white">Sneha Bhandari</span>
      </div>

    </div>
   </div>
  );
};

export default Footer1;
