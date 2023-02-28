import React from 'react'
import NavLogo from '../../assets/images/BrandLogo.png'
import InfinityLogo from '../../assets/images/infinityLogo.png'
import LocationImg from '../../assets/images/location.png';
import FrameLoginImg from '../../assets/images/Frame-96.png';
import BlinkFitnessSmallHeader from '../../PagesComponents/BlinkFitnessSmallHeader'
import GridPgotosGymPage from '../../PagesComponents/GridPgotosGymPage'
import AboutThisGym from '../../PagesComponents/AboutThisGym'
import SimilarGyms from '../../PagesComponents/SimilarGyms'
import Footer from '../../components/Footer/Footer'
import SubHeader from '../../components/SubHeader/SubHeader'
import { BsSearch } from 'react-icons/bs'
import '../GymPage/GymPage.css'
const GymPage = () => {
    return (
        <>
            {/* Header Start */}
            <SubHeader/>
            {/* Header End */}
            <BlinkFitnessSmallHeader />
            <GridPgotosGymPage />
            <AboutThisGym />
            <SimilarGyms />
            <Footer />
        </>
    )
}

export default GymPage