import React from 'react'
import useFormat from '../../hooks/useFormat'
import s from '../../styles/tokensPage/yearsCards.module.scss'

interface Props {
   year: number
   timeline?: string | null
   tokensPerDay: number
   totalTokens: number
}

const Card: React.FC<Props> = ({ year, timeline, tokensPerDay, totalTokens }) => {
   return (
      <li>
         <header>
            <div className={s.icon}></div>
            <span>Year {year}</span>
         </header>
         {timeline ? <h6>{timeline}</h6> : ''}
         <div>
            <p>{useFormat(tokensPerDay)} Tokens/Day</p>
            <p>({useFormat(totalTokens)} Tokens)</p>
         </div>
      </li>
   )
}

const YearsCards: React.FC = () => {
   const cardsInfo = [
      {
         year: 1,
         timeline: 'Day 1 - Day 90',
         tokensPerDay: 10_000_000,
         totalTokens: 900_000_000,
      },
      {
         year: 1,
         timeline: 'Day 90 - Day 365',
         tokensPerDay: 5_000_000,
         totalTokens: 1_375_000_000,
      },
      {
         year: 2,
         tokensPerDay: 4_000_000,
         totalTokens: 1_460_000_000,
      },
      {
         year: 3,
         tokensPerDay: 3_000_000,
         totalTokens: 1_009_500_000,
      },
      {
         year: 4,
         tokensPerDay: 2_000_000,
         totalTokens: 730_000_000,
      },
      {
         year: 5,
         tokensPerDay: 1_000_000,
         totalTokens: 365_000_000,
      },
      {
         year: 6,
         tokensPerDay: 1_000_000,
         totalTokens: 365_000_000,
      },
      {
         year: 7,
         tokensPerDay: 1_000_000,
         totalTokens: 365_000_000,
      },
      {
         year: 8,
         tokensPerDay: 1_000_000,
         totalTokens: 345_000_000,
      },
   ]
   return (
      <ul className={s.main}>
         {cardsInfo.map((el, i) => (
            <Card
               key={i}
               year={el.year}
               timeline={el.timeline ? el.timeline : null}
               tokensPerDay={el.tokensPerDay}
               totalTokens={el.totalTokens}
            />
         ))}
      </ul>
   )
}

export default YearsCards
