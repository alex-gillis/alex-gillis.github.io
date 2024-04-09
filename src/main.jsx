import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './views/Menu.jsx'
import Module from './views/Module.jsx'
import './styles/Module.css'

const myStatistics = { vitals: "Unknown", oxygen: "???", profit: "???" };
const saver = { name: "Save Game", clickable: "unclickable", function: "", id: "save" };
const loader = { name: "Load Game", clickable: "unclickable", function: "", id: "load" };
const newer = { name: "New Game", clickable: "", function: "", id: "new" };
const deleter = { name: "Delete Save", clickable: "", function: "", id: "delete" };

const buttons = {
  one: saver,
  two: loader,
  three: newer,
  four: deleter
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu statistics={myStatistics} buttons={buttons}/> 
    <Module />
  </React.StrictMode>,
)
