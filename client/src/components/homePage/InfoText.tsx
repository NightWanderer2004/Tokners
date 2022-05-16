import React, { useState } from 'react'
import useWindowDimensions from '../../hooks/useWindowDimentions'
import s from '../../styles/homePage/infoText.module.scss'

const InfoText: React.FC = () => {
   const [isHidden, setIsHidden] = useState(true)
   const { width } = useWindowDimensions()

   return (
      <div className={s.main}>
         <img className={s.mainImg} src='/assets/img/home/sub-img.png' alt='' loading='lazy' draggable='false' />
         <div className={s.textContent} id='info-text'>
            <div className={s.header}>
               {width < 768 ? (
                  <img src='assets/icons/logo2.svg' loading='lazy' alt='W' />
               ) : (
                  <img src='assets/icons/logo1.svg' loading='lazy' alt='W' />
               )}
               <h5>{width < 768 ? 'Weentar is coming' : 'Tokner is coming'}</h5>
            </div>
            <div className={`${s.text} ${isHidden ? 'overflow-hidden max-h-[320px]' : 'max-h-full'}`}>
               <div
                  className={`${s.shadowDrop} bg-gradient-to-t ${
                     isHidden ? 'from-[rgb(15,19,32)] to-[rgba(15,19,32,0.4)]' : 'from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0)]'
                  }`}
               ></div>
               <p>
                  Cryptocurrency adoption is at less than 1% of the global world population with some countries and entities actively fighting against
                  its mass adoption and the smartest developers and nerds holding the fort.
               </p>
               <p>
                  Bitcoin was the first, and it has since grown to thousands of tokens launched all aiming to fix one problem or the other with some
                  quite simply FOMOing the moment. Our goal is to bring mass adoption to the cryptocurrency space by dumbing it down. How far down? So
                  down that even a celebrity can explain it in simple words to their followers and have them download an app, buy into the social
                  currency of their favourite person and watch their investment as is with other crypto currency project.
               </p>
               <p>
                  We are trying to do to this space what investment apps did for the "nonexistent retail investors". We are gamefying digital
                  currency, bringing in popular faces instead of hard to understand projects to make it the norm and inadvertently being the "gateway
                  drug" for a lot of people to finally give this space a real look
               </p>
               <p>
                  A new digital economy is coming. People would be just as powerful as countries and creators would be paid beyond the peanuts that
                  conventional social media platforms can offer.
               </p>
               <p>There would be new markets and advertisers with little to offer would not find home there. Like Kanye said,</p>
               <blockquote>"Personalities would become the new currency, and services would be built on top of them".</blockquote>
               <p>Well, Kanye didn't exactly say that, but it sounds like something we hope he would say.</p>
               <p>
                  homePage/ Currency is digital, it has been that way for a while now, but this time there would be no dead presidents on the money,
                  there would people like you on the money, and you would own it because it would make the most sense in the world.
               </p>
            </div>
            <a href='#info-text' onClick={() => setIsHidden(!isHidden)}>
               {isHidden ? 'Read More' : 'Hide'}
            </a>
         </div>
      </div>
   )
}

export default InfoText
