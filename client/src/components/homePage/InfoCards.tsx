import React from 'react'
import s from '../../styles/homePage/infoCards.module.scss'

interface Props {
   icon: string
   title: string
   body: string
}

const Card: React.FC<Props> = ({ icon, title, body }) => {
   return (
      <li className={`${s.card}`}>
         <div className={s.image}>
            <img src={`/assets/icons/${icon}.svg`} alt={icon} />
         </div>
         <h3>
            For <span>{title}</span>
         </h3>
         <p>{body}</p>
      </li>
   )
}

const InfoCards: React.FC = () => {
   const cardsInfo = [
      {
         icon: 'crown',
         title: 'Creators',
         body: 'Creators can gain independence through a decentralised digital currency system that is dependent on growing and engaging with the community and also their star power. They own 10-15% of the total value of the tokens minted.',
      },
      {
         icon: 'star',
         title: 'Holders',
         body: 'Holding social tokens allows the individual to gain access to benefits including unreleased content, private communities, direct access to celebrity, early- access to tickets and more as well as the ability to trade with other communities in order to gain access to more creator content with early token buyers being the biggest winners as the value of the token increases with more buyers.',
      },
   ]
   return (
      <ul className={s.main}>
         {cardsInfo.map((el, i) => (
            <Card key={i} icon={el.icon} title={el.title} body={el.body} />
         ))}
      </ul>
   )
}

export default InfoCards
