import React from 'react'
import './About.css'

function About() {
    return (
        <div className='mainabout'>
            <div>
                <h1 className='aboutme'>Who am I ?</h1>
                <h3 className='aboutcontent'>
                    <ul>
                        <li>
                            Dynamic computer science graduate with a strong academic foundation, <br />
                            fresh perspective, and a commitment to continuous learning.</li>
                        <li>Possesses skills as a frontend developer, eager to apply my skills to dynamic <br />
                            projects and seamlessly integrate into a collaborative work environment.</li></ul>
                </h3>
                <div className="btncv">
                    <button className='resume' onClick={() => window.open('../assets/Susmitha_Shree_Resume.pdf')}>Download CV</button>
                </div>
            </div>
        </div>

    )
}

export default About