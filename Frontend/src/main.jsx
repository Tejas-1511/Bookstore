import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthNew from './context/AuthNew.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthNew>
      <div><App /></div>
    </AuthNew>
  </BrowserRouter>
)
