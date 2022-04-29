import React from 'react'
import s from '../../styles/homePage/timeline.module.scss'

interface Props {
   body: string[]
   quartal: string
}

const Quartal: React.FC<Props> = ({ body, quartal }) => {
   return (
      <li className={s.section}>
         <div className={s.icon}>
            <div>{quartal}</div>
            <span>2021</span>
         </div>
         <ol>
            {body.map((el, i) => (
               <li key={i}>
                  <span>{'0' + ++i}</span>
                  {el}
               </li>
            ))}
         </ol>
      </li>
   )
}

const Timeline: React.FC = () => {
   const quartalInfo = [
      {
         body: ['Team set-up', 'Launch of informational website'],
         quartal: 'Q1',
      },
      {
         body: [
            'Presale and exchange listings',
            'Blockchain development and launch',
            'Launch of our MVP',
            'Influencer agency partnerships',
            'Marketing and promotion ',
         ],
         quartal: 'Q2',
      },
      {
         body: [
            'Celebrity, Creator and Influencer partnerships',
            'Expansion of creator communities on our platform',
            'More Marketing and promotion',
         ],
         quartal: 'Q3',
      },
      {
         body: [
            'Mainstream partnerships',
            '500 active creator communitie',
            '2Million active community members',
            'More Marketing and promotion',
         ],
         quartal: 'Q4',
      },
   ]
   return (
      <ul className={s.main}>
         {quartalInfo.map((el, i) => (
            <Quartal key={i} body={el.body} quartal={el.quartal} />
         ))}
      </ul>
   )
}

export default Timeline
