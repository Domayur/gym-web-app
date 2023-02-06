import React from 'react'
import HeroImg from '../../assets/images/hero.png'
import LocationImg from '../../assets/images/location.png'

import './HeroSection/HeroSection.css'
import { BsFillGeoAltFill, BsFillOctagonFill, BsFillPlayFill, BsGeo, BsGeoFill } from "react-icons/bs";

const HeroSection = () => {
    return (
        <>
            <section className='hero-section'>
                <div class="container">
                    <div class="row gy-4 d-flex justify-content-between">
                        <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h2 class="heading-hero-line" data-aos="fade-up">Find Your Next Workout Destination</h2>
                            <p class="paragaraph-hero-line" data-aos="fade-up" data-aos-delay="100">Find the Right Gym for Your Fitness Goals and Preferences</p>
                            <form action="#" class="form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="200">
                                <div className='mayur'>
                                    <img src={LocationImg} alt="location" />
                                    <input type="text" class="form-control" placeholder={"ZIP code or CitY"} />
                                </div>

                                <button class="btn cst-btn-nav" type="button">Signup</button>
                            </form>
                            <div>
                                <button class="btn how-it-works" type="button">How it Works? <span><BsFillPlayFill /></span></button>
                            </div>
                        </div>
                        <div class="col-lg-5 order-1 order-lg-2 hero-img">
                            <img src={HeroImg} class="img-fluid mb-3 mb-lg-0" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection