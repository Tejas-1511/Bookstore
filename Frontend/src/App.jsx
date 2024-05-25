import React from 'react'
import Home from './home/Home'
import {Route,Routes} from 'react-router-dom'
import Allbooks from './Components/Allbooks'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Signup from './Components/Signup'

function App() {
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
     <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/allbooks' element={<Allbooks />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
       <Footer/> 
    </div>
  )
}

export default App
/*npm install -D tailwindcss
npx tailwindcss init
npm install react-slick --save
npm install slick-carousel --save 
npm install react-hook-form */