import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Subheader from './Components/Navigation/Subheader'
import Header from './Components/Navigation/Header'
import{Routes, Route} from 'react-router-dom'
import About from './Pages/About'
import Councelor from './Pages/Councelor'
import Services from './Pages/Services'
import Pricing from './Pages/Pricing'
import Blog from './/Pages/Blog'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Footer1 from './Components/Footer/Footer1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Subheader></Subheader>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/councelor' element={<Councelor/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
<Footer1></Footer1>
    </>
  )
}

export default App
