import React from 'react'
import'./Navbar.css'
import {Link} from 'react-scroll';


function Navbar() {
  return (
    <div className='navbar'>
        
        <div className='menubar'>
            <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className='menulist'>Home</Link>
            <Link activeClass='active' to='mainabout' spy={true} smooth={true} offset={-100} duration={500} className='menulist'>About</Link>
            <Link activeClass='active' to='skillmain' spy={true} smooth={true} offset={-100} duration={500} className='menulist'>Skills</Link>
            <Link activeClass='active' to='contactmain' spy={true} smooth={true} offset={-100} duration={500} className='menulist'>Contact</Link>

        </div>
        
    </div>
    
  )
}

export default Navbar