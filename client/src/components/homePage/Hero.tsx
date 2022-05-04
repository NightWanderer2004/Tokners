import React from 'react'
import s from '../../styles/homePage/hero.module.scss'

const Hero: React.FC = () => {
   return (
      <div className={s.main}>
         <div className={s.tagline}>
            <span>At Tokners we are</span>
            <h1>
               Reimagining social <br />
               media through the <br />
               power of the blockchain.
            </h1>
            <p>
               We are creating social media 3.0 with influencers, celebrities and creators being
               able to launch their own digital currency by simply creating a profile with media
               content posted as Non fungible Tokens that can be owned and traded on the Tknrs
               network
            </p>
            <a href='#about'>Learn More</a>
         </div>
         <img src='/assets/img/home/main-img.png' loading='lazy' alt='' />
      </div>
   )
}

export default Hero
