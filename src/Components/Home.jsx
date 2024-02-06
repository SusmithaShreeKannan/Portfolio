import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <div className='intro'>
        <h1 className='hello'>Hello,</h1>
        <h1>I'm <span className='introname'>Susmitha Shree</span></h1> 
        <h1>Front-End Developer</h1> 
        <button className="contact" onClick={()=>{
          document.getElementById('contactmain').scrollIntoView({behavior:"smooth"});
        }}
        >Contact</button>
        </div>
        <img className='image' src="https://files.realpython.com/media/HTML-And-CSS-For-Python-Developers_Watermarked.e2604f40ef5b.jpg" alt="" />
    </div>
  )
}

export default Home