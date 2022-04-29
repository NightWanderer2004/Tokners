import React from 'react'
import s from '../../styles/homePage/about.module.scss'

const About: React.FC = () => {
   return (
      <div className={s.main} id='about'>
         <img src='/assets/img/home/part1.png' alt='' loading='lazy' draggable='false' />
         <div className={s.infoText}>
            <h6>Weentar</h6>
            <h5>What makes us different?</h5>
            <span>We would only launch tokens with the express permission of the creators. </span>
            <p>
               There are several thousand celebrities and creators on twitter, tiktok, Instagram and
               YouTube with followings in the millions who we would be actively engaging before we
               go viral.
            </p>
            <p>
               We would get them on our platform and they would see the opportunity to create a fan
               driven digital economy where their digital content can be traded as NFTs and their
               most loyal fans can have the monetary value of their creator's currency increase
               significantly as they promote their digital currency across their channels while our
               native token holders benefit from the Weentar popularity.
            </p>
         </div>
      </div>
   )
}

export default About
