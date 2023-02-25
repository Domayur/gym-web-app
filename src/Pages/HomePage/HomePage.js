import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ExploreGymSection from '../../components/Home/ExploreGym/ExploreGymSection'
import HeroSection from '../../components/Home/HeroSection/HeroSection'
import PoplarGym from '../../components/Home/PoplarGym/PoplarGym'
import PopularDestination from '../../components/Home/PopularDestination/PopularDestination'
import WhyChooseGym from '../../components/Home/WhyChooseGym/WhyChooseGym'


const HomePage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <PopularDestination />
            <ExploreGymSection />
            <PoplarGym />
            <WhyChooseGym />
            <Footer />
        </>
    )
}

export default HomePage