import React from 'react'
import s from '../../styles/tokensPage/tokensCards.module.scss'

interface Props {
   title: string
   tokens: number
   text?: string
}

const Card: React.FC<Props> = ({ title, tokens, text }) => {
   return (
      <li>
         <h3>{title}</h3>
         <strong>{tokens.toLocaleString().replaceAll(',', '.')}</strong>
         <span>Tokens</span>
         {text ? <p>{text}</p> : ''}
      </li>
   )
}

const TokensCards: React.FC = () => {
   const cardsInfo = [
      {
         title: 'Proposal regarding Total Supply, ICO and Pricing Total Supply (after periodical increase of supply):',
         tokens: 10_000_000_000,
      },
      {
         title: 'Supply at Genesis:',
         tokens: 3_000_000_000,
         text: 'from the Genesis supply, 2,500,000,000 will be reserved for the ICO while 500,000,000 will be allocated for team members, founders and to onboard celebrities and influencers.',
      },
   ]
   return (
      <div className={s.main}>
         <ul>
            {cardsInfo.map((el, i) => (
               <Card key={i} title={el.title} tokens={el.tokens} text={el.text ? el.text : ''} />
            ))}
         </ul>
      </div>
   )
}

export default TokensCards
