import React from 'react'
import HeroImg from '../../assets/images/hero.png'
import LocationImg from '../../assets/images/location.png'
import { BsFillPlayFill, BsSearch } from "react-icons/bs";
import '../HeroSection/HeroSection.css'

const HeroSection = () => {
    return (
        <>
            <section class='hero-section'>
                <div class="container mt-4">
                    <div class="row gy-4 d-flex justify-content-between ">
                        <div class="col-lg-12 order-2 order-lg-1 col-sm-8 order-sm-1 d-flex flex-column justify-content-center">
                            <div class="container mt-5" >
                                <div class="row" >
                                    <div class="col-lg-6" >
                                        <h1 class="heading-hero-line" data-aos="fade-up">Find Your Next <br />Workout Destination</h1>
                                        <p class="paragaraph-hero-line" data-aos="fade-up" data-aos-delay="100">Find the Right Gym for Your Fitness Goals and Preferences</p>
                                        <div className='rao-new-set justify-content-between'>
                                            <form action="#" class="form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="200">
                                                <div class='marata'>
                                                    <div class="LocationImg">
                                                        <img src={LocationImg} alt="location" className="m-1" />
                                                    </div>
                                                    <div class="desti_input">
                                                        <label className='where-class-lable'>where</label><br />
                                                        <input type="text" class="extra-class-remove-css" placeholder="Destination, city, address" value={"Destination, city, address"} />
                                                    </div>
                                                    <div class="search-div">
                                                        <button type="button" class="btn new-cst-cla">
                                                            <BsSearch className='search-chnage-icon-color' /> Search
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button class="btn how-it-works" type="button">How it Works? <span><BsFillPlayFill className='play-icons' /></span></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 order-1 order-sm-2 hero-img d-block d-sm-none">
                            <img src={HeroImg} class="img-fluid mb-3 mb-lg-0" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection


