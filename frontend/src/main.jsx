import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { WorkoutsContextProvider } from './context/WorkoutsContext';
import { AuthContextProvider } from './context/AuthContext'



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutsContextProvider>
        <App />
      </WorkoutsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
