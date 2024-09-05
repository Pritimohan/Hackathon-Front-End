import React from 'react'
import mainLogo from '../assets/icons/logo.png'



function NavBar() {
  return (
   <nav className=' shadow-lg bg-white z-10 relative px-12 py-1'>
    <img src={mainLogo} alt="" width={100} />
   </nav>
  )
}

export default NavBar