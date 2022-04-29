import React from 'react'
import s from '../../styles/homePage/howTo.module.scss'

interface Props {
   number: string
   body: string
}

const Card: React.FC<Props> = ({ number, body }) => {
   return (
      <li className={s.card}>
         <span>{number}</span>
         <p>{body}</p>
      </li>
   )
}

const HowTo: React.FC = () => {
   return (
      <div className={s.main}>
         <h5>How to buy</h5>
         <ul>
            <Card
               number='01'
               body='First Connect your Metamask or TrustWallet to the "Connect Wallet" on the Homepage.'
            />
            <div className={s.arrow}>
               <svg
                  width='16'
                  height='10'
                  viewBox='0 0 16 10'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
               >
                  <path
                     d='M2 2L8 8L14 2'
                     stroke='black'
                     strokeWidth='3'
                     strokeLinecap='round'
                     strokeLinejoin='round'
                  />
               </svg>
            </div>
            <Card
               number='02'
               body='Then send minimum of 0.1 BNB or maximum of 10 BNB to the Presale wallet'
            />
            <div className={s.arrow}>
               <svg
                  width='16'
                  height='10'
                  viewBox='0 0 16 10'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
               >
                  <path
                     d='M2 2L8 8L14 2'
                     stroke='black'
                     strokeWidth='3'
                     strokeLinecap='round'
                     strokeLinejoin='round'
                  />
               </svg>
            </div>
            <Card
               number='03'
               body='Then after you will received your $WNTR to your address within 24hours.'
            />
         </ul>
      </div>
   )
}

export default HowTo
