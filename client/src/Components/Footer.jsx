import React from 'react'
import '../Styles/Footer.css'
import logo from '../Images/bluel.png'
export const Footer = () => {
  return (
    <>
    <footer className='footer-container'>
      <div className="foot-left">
        <img src={logo} alt="logo" />
        Second<span id="medi">Loop</span>
      </div>
     <div className="foot-right">
       <span id="privacy">Privacy policy?</span><br/>
     Copyright &copy; 2022 SecondLoop.  All rights reserved.
     </div>
    </footer>
    </>
  )
}
