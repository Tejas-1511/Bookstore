import React from 'react'
import Home from './home/Home'
import {Navigate, Route,Routes} from 'react-router-dom'
import Allbooks from './Components/Allbooks'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Signup from './Components/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuth } from '../src/context/AuthNew';
import About from './Components/About'

function App() {
  const[authUser,setAuthUser]=useAuth()
    console.log(authUser);

  return (
    <div className='dark:bg-slate-900 dark:text-white'>
     <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/allbooks' element={authUser?<Allbooks />:<Navigate to="/signup"/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/about' element={<About />} />
        </Routes>
       <Footer/> 
       <Toaster />
    </div>
  )
}

export default App
/*npm install -D tailwindcss
npx tailwindcss init
npm install react-slick --save
npm install slick-carousel --save 
npm install react-hook-form
npm i axios
npm install react-hot-toast */