import React from 'react'
import Banner from '../Components/PageComponent/Home/Banner'
import HowItWorksSection from '../Components/PageComponent/Home/HowItWorksSection'
import BestCounseling from '../Components/PageComponent/Home/BestCounseling'
import WeCanHelp from '../Components/PageComponent/Home/WeCanHelp'
import RecentBlog from '../Components/PageComponent/Home/RecentBlog'
import HappyClient from '../Components/PageComponent/Home/HappyClient'
import Affordable from '../Components/PageComponent/Home/Affordable'
import Forms from '../Components/PageComponent/Home/Forms'


function Home() {
  return (
    <div className='relative'>
      <Banner />
      <HowItWorksSection/>
      <BestCounseling/>
      <WeCanHelp/>
      <HappyClient/>
      <Affordable/>
      <Forms/>
      <RecentBlog/>
   
    </div>
  )
}

export default Home
