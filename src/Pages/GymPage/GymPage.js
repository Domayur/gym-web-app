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
import { BsSearch } from 'react-icons/bs'
import '../GymPage/GymPage.css'

const GymPage = () => {
    return (
        <>
            {/* Header Start */}
            <nav class="navbar navbar-expand-lg  ">
                <div class="container-fluid">
                    <img class="navbar-brand cst-nav-img" src={NavLogo} />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <div className='justify-content-between left-padding-cst'>
                                    <div class='marata'>
                                        <div class="LocationImg">
                                            <img src={LocationImg} alt="location" className="m-1" />
                                        </div>
                                        <div class="desti_input">
                                            <label className='where-class-lable'>where</label><br />
                                            <input type="text" class="extra-class-remove-css" placeholder="New York" value={"New York"} />
                                        </div>
                                        <div class="search-div">
                                            <button type="button" class="btn new-cst-cla">
                                                <BsSearch className='search-chnage-icon-color' /> Search
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item p-2">
                                    <img class="cs-infinity-img" src={InfinityLogo} />
                                    <button class="btn partner-with-us-btn" type="button" data-bs-toggle="modal" data-bs-target="#HowItWorkModal">Partner with Us</button>
                                </li>
                                <li class="nav-item p-2">
                                    <img src={FrameLoginImg} />
                                    {/* <button class="btn cst-btn-nav" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalCreateNewAccount">Signup</button> */}
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
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