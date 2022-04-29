import React from 'react'
import Hero from '../components/tokensPage/Hero'
import TokensCards from '../components/tokensPage/TokensCards'
import YearsCards from '../components/tokensPage/YearsCards'

const Tokens: React.FC = () => {
   return (
      <main className='flex-1'>
         <div className='container mx-auto px-2'>
            <Hero />
            <YearsCards />
         </div>
         <TokensCards />
      </main>
   )
}

export default Tokens
