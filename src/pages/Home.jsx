import React, { useEffect, useRef } from 'react'
import { Hero, Featured, Footer } from '../components'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <main className='overflow-x-hidden w-screen bg-portfolio-primary'>
      <Hero />
      <Featured />
      <Footer />
    </main>
  )
}

export default Home
