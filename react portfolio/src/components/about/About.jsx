import React from 'react'
import './About.css'
import aboutImg from '../../assets/images/about.png'

const About = () => {
  return (
    <div className='about'>

        <div className='a-div'>

        <div className='a-content'>
            <h2 style={{textAlign:'center', fontSize:'35px'}}>Know Who <strong style={{color:'blueviolet'}}>I'M</strong></h2><br/>
            <p>Hi Everyone, I am <strong style={{color:'blueviolet'}}>Narendar Banothu</strong> from <strong style={{color:'blueviolet'}}>Hyderabad, Telangana, India</strong></p>
            <p>I am a <strong style={{color:'blueviolet'}}>Frontend Developer</strong> with experience building scalable and efficient web applications using modern frameworks like <strong style={{color:'blueviolet'}}>React.js and Next.js.</strong> Proficient in <strong style={{color:'blueviolet'}}>JavaScript, TypeScript</strong> and creating responsive, user-friendly designs.</p><br/>
            <p>Apart from coding, some other activities that I love to do!</p>
            <p>Travelling</p>
            <p>Playing Games</p>
            <p>Movies and Musics</p>
        </div>
            
          <div>
            <img src={aboutImg} style={{maxHeight:'550px'}} />
          </div>

        </div>

        <div className='a-div2'>
            <h3>Professional <span>Skillset</span></h3>
            
        </div>
    </div>
  )
}

export default About