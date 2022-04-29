import React from 'react'
import About from '../components/homePage/About'
import InfoText from '../components/homePage/InfoText'
import Hero from '../components/homePage/Hero'
import InfoCards from '../components/homePage/InfoCards'
import Timeline from '../components/homePage/Timeline'
import DetailsCards from '../components/homePage/DetailsCards'
import HowTo from '../components/homePage/HowTo'

const Home: React.FC = () => {
   return (
      <main className='flex-1'>
         <div className='container mx-auto px-2'>
            <Hero />
            <InfoCards />
         </div>
         <About />
         <div className='container mx-auto px-2'>
            <Timeline />
            <InfoText />
         </div>
         <DetailsCards />
         <div className='container mx-auto px-2'>
            <HowTo />
         </div>
      </main>
   )
}

export default Home
