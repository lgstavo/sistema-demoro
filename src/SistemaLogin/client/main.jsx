import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './base.css'

// 1. Importar o BrowserRouter
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Envelopar o App com ele */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)