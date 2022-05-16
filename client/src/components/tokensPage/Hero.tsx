import React from 'react'
// import s from '../../styles/tokensPage/hero.module.scss'

interface Props {
   infoText: string
   tokensAmount: number
}

const Stats: React.FC<Props> = ({ infoText, tokensAmount }) => {
   return (
      <div className=''>
         <p>{infoText}</p>
         <strong>{tokensAmount.toLocaleString().replaceAll(',', '.')}</strong>
         <span>Tknrs Tokens</span>
      </div>
   )
}

const Hero: React.FC = () => {
   return (
      <div className={''}>
         <h4>Tknrs Tokenomics and Token Distribution</h4>
         <div className={''}>
            <Stats infoText='Tknrs Token Distribution Schedule Total Supply:' tokensAmount={10_000_000_000} />
            <Stats infoText='Premined Tokens' tokensAmount={3_000_000_000} />
            <Stats infoText='Daily Token Distribution' tokensAmount={7_000_000_000} />
         </div>
         <img src='/assets/img/tokenomics/half.png' loading='lazy' alt='' />
      </div>
   )
}

export default Hero
