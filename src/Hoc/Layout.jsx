import React from 'react'

import Footer1 from '../Components/Footer/Footer1'
import { Outlet } from 'react-router-dom'
import MainNav from '../Components/Navigation'

function Layout() {
  return (
    <div>
         <MainNav />
      <div>
        <Outlet/>
      </div>
     <Footer1/>
      
    </div>
  )
}

export default Layout
