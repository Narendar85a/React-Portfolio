import React from 'react'
import './Home.css'
import homeLogo from '../../assets/images/home-main.svg'
import myImg from '../../assets/images/avatar.svg'



const Home = () => {
  return (
    <div style={{marginTop:'50px',}}>
        <div className='home'>
            <div className='home-div'>
                <p style={{fontSize:'40px',fontWeight:'500'}}>Hi There! <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span></p>
                <p style={{fontSize:'40px',fontWeight:'500'}}>I'M NARENDAR BANOTHU</p>
                <p style={{fontSize:'40px',fontWeight:'500'}}>Frontend Developer</p>
            </div>
            <div>
                <img src={homeLogo}  style={{maxInlineSize:'650px', margin:'100px'}}/>
            </div>
        </div>

        <div className='home-div2'>
            <div className='h-div'>
                <p style={{fontSize:'30px', textAlign:'center'}}>LET ME <strong style={{color:'blueviolet'}}>INTRODUCE</strong> MYSELF</p>
                <p>Whenever possible, I also apply my passion for developing products with Modern <br/>
                <strong style={{color:'blueviolet'}}>Javascript Library and Frameworks</strong>  like <strong style={{color:'blueviolet'}}>React.js and Next.js</strong> </p>
            </div>
            <div>
                <img src={myImg}/>
            </div>
        </div>

        <div></div>
    </div>
  )
}

export default Home