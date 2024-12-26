
import{Routes, Route} from 'react-router-dom'
import About from './Pages/About'
import Councelor from './Pages/Councelor'
import Services from './Pages/Services'
import Pricing from './Pages/Pricing'
import Blog from './/Pages/Blog'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Layout from './Hoc/Layout'

function App() {

  return (
    <>

      <Routes>
        <Route element={<Layout />}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/councelor' element={<Councelor/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>

        </Route>
      </Routes>
    </>
  )
}

export default App
