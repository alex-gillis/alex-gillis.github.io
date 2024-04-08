import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './views/Menu.jsx'
import Module from './views/Module.jsx'
import './styles/Module.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu /> 
    <Module />
  </React.StrictMode>,
)
