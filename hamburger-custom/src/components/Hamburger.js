import React, { useState } from "react";
import hamburger from './hamburger.png';



const Hamburger = () => {
  const [hamList, setHamList] = useState('')

  const display = () => {
    
    // * ternary true/false that displays either hamburger or normal display
    setHamList(
      <div id="div-hamburger-list" >{hamList}
      <input id="input-hamburger-closed" type="image" src={hamburger} onClick={() => exitDisplay()}/>
      <h2 id="nav-menu">Menu</h2>
      <button className="nav-item">Home</button>
      <button className="nav-item">Cart</button>
      <button className="nav-item">Support</button>
      </div>
    )
    document.getElementById('input-hamburger-open').setAttribute('hidden', true)
  }

  const exitDisplay = () => {
    setHamList('')
    document.getElementById('input-hamburger-open').removeAttribute('hidden')
  }


  return (
    <div id="div-hamburger">
      <input id="input-hamburger-open"type="image" src={hamburger} onClick={() => display()}/>
      {hamList}
    </div>
  )
}








export default Hamburger