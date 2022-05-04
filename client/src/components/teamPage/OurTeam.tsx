import React from 'react'
import s from '../../styles/teamPage/team.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

interface Props {
   name: string
   job: string
   img: string
}
const Teammate: React.FC<Props> = ({ name, job, img }) => {
   return (
      <>
         <h5>{name}</h5>
         <h6>{job}</h6>
         <img src={`/assets/img/team/${img}.png`} loading='lazy' alt='' />
      </>
   )
}

const OurTeam: React.FC = () => {
   const cardsInfo = [
      {
         name: 'Brad pie',
         job: 'CEO and Co founder',
         img: 'person1',
      },
      {
         name: 'Lee Lee',
         job: 'CEO and Co founder',
         img: 'person2',
      },
      {
         name: 'Shan khan',
         job: 'Head of Development',
         img: 'person3',
      },
      {
         name: 'Shan Lopez',
         job: 'Head of Development',
         img: 'person4',
      },
   ]
   return (
      <div className={s.main}>
         <div className='container mx-auto px-2'>
            <h4>Our Team</h4>
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
                     spaceBetween: 0,
                  },
               }}
            >
               {cardsInfo.map((el, i) => (
                  <SwiperSlide key={i} tag='li'>
                     <Teammate name={el.name} job={el.job} img={el.img} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   )
}

export default OurTeam
