import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Problems from './pages/problem/Problems.jsx'
import { BrowserRouter } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Problems />
    </BrowserRouter>
  </React.StrictMode>,
)
