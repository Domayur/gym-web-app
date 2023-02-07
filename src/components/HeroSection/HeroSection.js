import React from 'react'
import HeroImg from '../../assets/images/hero.png'
import LocationImg from '../../assets/images/location.png'
import { BsFillPlayFill } from "react-icons/bs";
import './HeroSection/HeroSection.css'

const HeroSection = () => {
    return (
        <>
            <section class='hero-section'>
                <div class="container">
                    <div class="row gy-4 d-flex justify-content-between">
                        <div class="col-lg-8 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h2 class="heading-hero-line" data-aos="fade-up">Find Your Next <br />Workout Destination</h2>
                            <p class="paragaraph-hero-line" data-aos="fade-up" data-aos-delay="100">Find the Right Gym for Your Fitness Goals and Preferences</p>
                            <form action="#" class="form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="200">
                                <div class='row mayur justify-content-between"'>
                                    <div class="col-sm-1">
                                        <img src={LocationImg} alt="location" />
                                    </div>
                                    <div class="col-sm-5">
                                        <input type="text" class="form-control" placeholder="Destination, city, address" />
                                    </div>
                                    <div class="col-sm-2 ">
                                        <button class="btn cst-btn-nav float-right" type="button">Signup</button>
                                    </div>
                                </div>
                            </form>
                            <div>
                                <button class="btn how-it-works" type="button">How it Works? <span><BsFillPlayFill className='play-icons' /></span></button>
                            </div>
                        </div>
                        <div class="col-lg-4 order-1 order-lg-2 hero-img">
                            <img src={HeroImg} class="img-fluid mb-3 mb-lg-0" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection