import "./styles.css"

import AppRouter from "./components/Router/AppRouter"
import React from "react"

const App = () => {
  return (
    <div className="App">
      

      <ul id="nav-list">
        <li><a href="/home">BekzatBagdat</a></li>
        <li><a href="/projects">projects</a></li>
        <li><a href="">Github</a></li>
      </ul>
      <AppRouter/>
    </div>
    
  ) 
}

export default App
