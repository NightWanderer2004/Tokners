import React from 'react'
import s from '../../styles/homePage/detailsCards.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

interface Props {
   number: string
   date: string
   subTitle: string
   body: string[]
}

const numberToWord = (num: string) => {
   switch (num) {
      case '01':
         return 'One'
      case '02':
         return 'Two'
      case '03':
         return 'Three'
      default:
         return ''
   }
}

const Card: React.FC<Props> = ({ number, date, subTitle, body }) => {
   return (
      <>
         <h6>{number}</h6>
         <div className={s.icon}>
            <span>{number}</span>
         </div>
         <div className={s.body}>
            <div>
               <h5>Phase {numberToWord(number)}</h5>
               <span>{date}</span>
            </div>
            <div>
               <h4>{subTitle}</h4>
               {body.map((el, i) => (
                  <p key={i}>
                     {el.split(':')[0]}:<strong>{el.split(':')[1]}</strong>
                  </p>
               ))}
            </div>
         </div>
      </>
   )
}

const DetailsCards: React.FC = () => {
   const cardsInfo = [
      {
         number: '01',
         date: '01/04/2021 - 16/04/2021',
         subTitle: '1 BNB = 100000 WNTR',
         body: ['Soft cap: 5000 BNB', 'Hard cap: 10000 BNB'],
      },
      {
         number: '02',
         date: '16/04/2021 - 28/05/2021',
         subTitle: '1 BNB = 100300 WNTR',
         body: ['Soft cap: 7000 BNB', 'Hard cap: 12000 BNB'],
      },
      {
         number: '03',
         date: '28/05/2021 - 19/06/2021',
         subTitle: '1 BNB = 101900 WNTR',
         body: ['Soft cap: 10000 BNB', 'Hard cap: 15000 BNB'],
      },
   ]
   return (
      <div className={s.main}>
         <h3>Presale Details</h3>
         <Swiper
            wrapperTag='ul'
            modules={[Pagination]}
            pagination={{ clickable: true, dynamicBullets: true }}
            slidesPerView={1.2}
            centeredSlides
            spaceBetween={16}
            breakpoints={{
               1024: {
                  enabled: false,
               },
            }}
         >
            {cardsInfo.map((el, i) => (
               <SwiperSlide key={i} tag='li'>
                  <Card number={el.number} date={el.date} subTitle={el.subTitle} body={el.body} />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   )
}

export default DetailsCards
