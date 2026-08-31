import React from 'react'
// import Header from '../components/Header'
import Hero from '../components/Hero'
import Marketplace from '../components/Marketplace'
import CategoryHero1 from '../components/CategoryHero1'
import CategoryHero2 from '../components/CategoryHero2'
// import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        {/* <Header/> */}
        <Hero/>
        <Marketplace/>
        <CategoryHero1/>
        <CategoryHero2/>
        {/* <Footer/> */}
    </div>
  )
}

export default Home;