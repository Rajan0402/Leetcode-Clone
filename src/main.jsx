import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Problems from './pages/problem/Problem.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Problems />
  </React.StrictMode>,
)
