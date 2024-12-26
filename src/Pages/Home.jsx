import React from 'react'
import Banner from '../Components/PageComponent/Home/Banner'
import HowItWorksSection from '../Components/PageComponent/Home/HowItWorksSection'
import BestCounseling from '../Components/PageComponent/Home/BestCounseling'
import WeCanHelp from '../Components/PageComponent/Home/WeCanHelp'


function Home() {
  return (
    <div className='relative'>
      <Banner />
      <HowItWorksSection/>
      <BestCounseling/>
      <WeCanHelp/>
   
    </div>
  )
}

export default Home
