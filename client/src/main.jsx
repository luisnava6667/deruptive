import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CriptoProvider } from './context/CriptoProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CriptoProvider>
      <App />
    </CriptoProvider>
  </React.StrictMode>
)
